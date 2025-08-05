import AchievementStampsBar from '@/reward/components/AchievementStampsBar';
import RewardHeader from '@/reward/components/RewardHeader';
import StampList from '@/reward/components/StampList';

const RewardPage = () => {
  return (
    <div className="px-4 bg-[#F1F5FD] h-screen">
      <RewardHeader>My Stamps</RewardHeader>
      <AchievementStampsBar />
      <StampList />
    </div>
  );
};

export default RewardPage;
