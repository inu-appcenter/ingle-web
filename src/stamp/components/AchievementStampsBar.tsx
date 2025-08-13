interface Props {
  currentCount: number;
  totalCount: number;
}

const AchievementStampsBar = ({ currentCount, totalCount }: Props) => {
  const progress =
    totalCount > 0 ? Math.min((currentCount / totalCount) * 100, 100) : 0; // 퍼센트 계산, 100% 제한

  return (
    <div className="w-full h-40 flex flex-col shadow-md my-4 rounded-[15px] justify-center items-center bg-[#ffffff]">
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
