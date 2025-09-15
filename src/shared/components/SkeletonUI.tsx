import { ReactNode } from 'react';

interface SkeletonProps {
  className?: string;
  children?: ReactNode;
}

// 기본 스켈레톤 컴포넌트
export const Skeleton = ({ className = '', children }: SkeletonProps) => {
  return (
    <div
      className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded animate-shimmer ${className}`}
    >
      {children}
    </div>
  );
};

// 스탬프 아이템용 스켈레톤
export const StampItemSkeleton = () => {
  return (
    <div className="w-1/3 h-32 flex flex-col items-center justify-center mb-8">
      <div className="bg-[#ffffff] w-[104px] h-[104px] flex justify-center items-center rounded-full overflow-hidden relative">
        <Skeleton className="w-24 h-24 rounded-full" />
      </div>
      <Skeleton className="w-16 h-4 mt-2 rounded" />
    </div>
  );
};

// 스탬프 리스트용 스켈레톤
export const StampListSkeleton = ({ count = 12 }: { count?: number }) => {
  return (
    <div className="flex flex-wrap w-full mt-8">
      {Array.from({ length: count }).map((_, index) => (
        <StampItemSkeleton key={index} />
      ))}
    </div>
  );
};

// 이미지 로딩용 스켈레톤
export const ImageSkeleton = ({
  width = 'w-full',
  height = 'h-48',
  className = '',
}: {
  width?: string;
  height?: string;
  className?: string;
}) => {
  return (
    <Skeleton className={`${width} ${height} ${className}`}>
      <div className="flex items-center justify-center h-full">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Skeleton>
  );
};

// 카드용 스켈레톤
export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <Skeleton className="w-full h-48 mb-4" />
      <Skeleton className="w-3/4 h-6 mb-2" />
      <Skeleton className="w-1/2 h-4" />
    </div>
  );
};

// 텍스트 스켈레톤
export const TextSkeleton = ({
  lines = 1,
  className = '',
}: {
  lines?: number;
  className?: string;
}) => {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className={`h-4 mb-2 ${index === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  );
};
