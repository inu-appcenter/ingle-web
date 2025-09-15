import api from '@/shared/api/intercepter';
import { StampListSkeleton } from '@/shared/components/SkeletonUI';
import AchievementStampsBar from '@/stamp/components/AchievementStampsBar';
import StampHeader from '@/stamp/components/StampHeader';
import StampList from '@/stamp/components/StampList';
import { Stamp } from '@/stamp/types/stamp';
import { useEffect, useState } from 'react';

const StampPage = () => {
  const [stampList, setStampList] = useState<Stamp[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStampList = async () => {
      try {
        setIsLoading(true);
        const res = await api.get('/api/v1/stamps');
        setStampList(res.data);
        console.log('getStampList:', res.data);
      } catch (err) {
        console.error('에러:', err);
      } finally {
        setIsLoading(false);
      }
    };
    getStampList();
  }, []);

  const currentCount = stampList.filter(stamp => stamp.completed).length;
  const totalCount = stampList.length;
  // const currentCount = 2;
  // const totalCount = 5;

  return (
    <div className="px-4 bg-[#F9F9F9] min-h-screen">
      <StampHeader>My Stamps</StampHeader>
      <AchievementStampsBar
        currentCount={currentCount}
        totalCount={totalCount}
        isLoading={isLoading}
      />
      {isLoading ? <StampListSkeleton count={12} /> : <StampList stampList={stampList} />}
    </div>
  );
};

export default StampPage;
