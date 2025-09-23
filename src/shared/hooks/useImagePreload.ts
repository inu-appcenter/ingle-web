import { useEffect, useState } from 'react';

interface PreloadOptions {
  priority?: boolean;
  onLoad?: (src: string) => void;
  onError?: (src: string) => void;
}

export const useImagePreload = (imageSrcs: string[], options: PreloadOptions = {}) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const preloadImages = async () => {
      const promises = imageSrcs.map(src => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();

          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, src]));
            setLoadingImages(prev => {
              const newSet = new Set(prev);
              newSet.delete(src);
              return newSet;
            });
            options.onLoad?.(src);
            resolve(src);
          };

          img.onerror = () => {
            setErrorImages(prev => new Set([...prev, src]));
            setLoadingImages(prev => {
              const newSet = new Set(prev);
              newSet.delete(src);
              return newSet;
            });
            options.onError?.(src);
            reject(src);
          };

          if (options.priority) {
            img.loading = 'eager';
          } else {
            img.loading = 'lazy';
          }

          setLoadingImages(prev => new Set([...prev, src]));
          img.src = src;
        });
      });

      try {
        await Promise.allSettled(promises);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    if (imageSrcs.length > 0) {
      preloadImages();
    }
  }, [imageSrcs, options]);

  return {
    loadedImages,
    loadingImages,
    errorImages,
    isLoaded: (src: string) => loadedImages.has(src),
    isLoading: (src: string) => loadingImages.has(src),
    hasError: (src: string) => errorImages.has(src),
  };
};
