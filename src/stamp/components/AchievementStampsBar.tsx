const AchievementStampsBar = () => {
  return (
    <div className="w-full h-40 flex flex-col shadow-md my-4 rounded-[15px] justify-center items-center bg-[#ffffff]">
      <p className="text-4xl font-bold mb-1">13 / 13</p>
      <p className="text-base">Achievement Stamps</p>
      <div className="w-full px-4">
        <div className="flex justify-between mb-2 text-[#877777]">
          <p>Start</p>
          <p>Done</p>
        </div>
        <div className="bg-[#7A00E6] w-full h-7 rounded-[30px]"></div>
      </div>
    </div>
  );
};

export default AchievementStampsBar;
