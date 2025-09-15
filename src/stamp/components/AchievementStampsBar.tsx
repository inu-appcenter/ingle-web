import { TextSkeleton } from '@/shared/components/SkeletonUI';

interface Props {
  currentCount: number;
  totalCount: number;
  isLoading?: boolean;
}

const AchievementStampsBar = ({ currentCount, totalCount, isLoading = false }: Props) => {
  const progress = totalCount > 0 ? Math.min((currentCount / totalCount) * 100, 100) : 0; // 퍼센트 계산, 100% 제한

  if (isLoading) {
    return (
      <div className="w-full h-40 flex flex-col my-4 rounded-[15px] justify-center items-center">
        <TextSkeleton className="w-32 h-12 mb-1" />
        <TextSkeleton className="w-40 h-6 mb-4" />
        <div className="w-full px-4">
          <div className="flex justify-between mb-2">
            <TextSkeleton className="w-8 h-4" />
            <TextSkeleton className="w-8 h-4" />
          </div>
          <div className="bg-gray-200 w-full h-7 rounded-[30px] overflow-hidden">
            <TextSkeleton className="w-1/3 h-full rounded-[30px]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-40 flex flex-col my-4 rounded-[15px] justify-center items-center">
      <p className="text-4xl font-bold mb-1">{`${currentCount} / ${totalCount}`}</p>
      <p className="text-base">Achievement Stamps</p>
      <div className="w-full px-4">
        <div className="flex justify-between mb-2 text-[#877777]">
          <p>Start</p>
          <p>Done</p>
        </div>
        <div className="bg-gray-200 w-full h-7 rounded-[30px] overflow-hidden">
          <div
            className="bg-[#7A00E6] h-full rounded-[30px] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AchievementStampsBar;
