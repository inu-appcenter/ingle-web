import AchievementStampsBar from '@/stamp/components/AchievementStampsBar';
import RewardHeader from '@/stamp/components/RewardHeader';
import StampList from '@/stamp/components/StampList';

const StampPage = () => {
  return (
    <div className="px-4 bg-[#F1F5FD] min-h-screen">
      <RewardHeader>My Stamps</RewardHeader>
      <AchievementStampsBar />
      <StampList />
    </div>
  );
};

export default StampPage;
