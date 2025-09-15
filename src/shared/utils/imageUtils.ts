// 이미지 최적화를 위한 유틸리티 함수들

export const getOptimizedImageSrc = (
  src: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpeg' | 'png';
  },
) => {
  // 현재는 원본 이미지를 반환하지만,
  // 나중에 CDN이나 이미지 최적화 서비스를 사용할 때 활용
  return src;
};

export const getImageDimensions = (
  src: string,
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = (imageSrcs: string[]) => {
  // 중요한 이미지들을 즉시 로드
  imageSrcs.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

export const createImagePlaceholder = (
  width: number,
  height: number,
  color = '#f3f4f6',
) => {
  // SVG placeholder 생성
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
        Loading...
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};
