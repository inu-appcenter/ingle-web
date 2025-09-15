import { useState } from 'react';
import { ImageSkeleton } from '@/shared/components/SkeletonUI';

interface StampItemProps {
  name: string;
  image: string;
  completed: boolean;
  onClick?: () => void;
}

const StampItem = ({ name, image, completed, onClick }: StampItemProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div
      className="w-1/3 h-32 flex flex-col items-center justify-center mb-8 cursor-pointer group"
      onClick={onClick}
    >
      <div className="bg-[#ffffff] w-[104px] h-[104px] flex justify-center items-center rounded-full overflow-hidden relative">
        {imageLoading && (
          <ImageSkeleton width="w-24" height="h-24" className="rounded-full" />
        )}

        {!imageError && (
          <img
            src={image}
            alt={name}
            className={`w-24 h-24 mb-2 transition duration-300 ${
              completed ? '' : 'blur-md'
            } ${imageLoading ? 'opacity-0 absolute' : 'opacity-100'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {imageError && (
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400 text-xs">이미지 없음</span>
          </div>
        )}

        {!completed && !imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-[#C1C9D2] rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <span className="text-[#C1C9D2] text-2xl font-bold">?</span>
            </div>
          </div>
        )}
      </div>
      <p
        className={`text-center transition duration-300 ${
          completed ? 'group-hover:text-[#7A00E6]' : 'text-gray-400'
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default StampItem;
