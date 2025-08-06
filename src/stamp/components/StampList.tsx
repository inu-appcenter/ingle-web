import StampItem from '@/stamp/components/StampItem';

const stampList = [
  { name: 'Transit' },
  { name: 'Dormitory' },
  { name: 'Library' },
  { name: 'Clubs' },
  { name: 'Festival' },
  { name: 'Courses' },
  { name: 'Curriculum' },
  { name: 'Grades' },
  { name: 'Hospital' },
  { name: 'Insurance' },
  { name: 'Jobs' },
  { name: 'K-Culture' },
];

const StampList = () => {
  return (
    <div className="flex flex-wrap w-full mt-8">
      {stampList.map((item, index) => {
        return <StampItem item={item} index={index} />;
      })}
    </div>
  );
};

export default StampList;
