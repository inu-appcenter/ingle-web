import { useEffect, useState } from 'react';
import AchievementStampsBar from '@/stamp/components/AchievementStampsBar';
import StampHeader from '@/stamp/components/StampHeader';
import StampList from '@/stamp/components/StampList';
import { Stamp } from '@/stamp/types/stamp';
import { instance } from '@/shared/api/intercepter';

const StampPage = () => {
  const [stampList, setStampList] = useState<Stamp[]>([]);

  useEffect(() => {
    const getStampList = async () => {
      try {
        const res = await instance.get('/api/v1/tutorials');
        setStampList(res.data);
        console.log('getStampList:', res.data);
      } catch (err) {
        console.error('에러:', err);
      }
    };
    getStampList();
  }, []);

  // const currentCount = stampList.filter(stamp => stamp.status).length;
  // const totalCount = stampList.length;
  const currentCount = 2;
  const totalCount = 5;

  return (
    <div className="px-4 bg-[#F1F5FD] min-h-screen">
      <StampHeader>My Stamps</StampHeader>
      <AchievementStampsBar currentCount={currentCount} totalCount={totalCount} />
      <StampList /*stampList={stampList} */ />
    </div>
  );
};

export default StampPage;
