import { useState } from 'react';
import { Stamp } from '@/stamp/types/stamp';
import StampItem from '@/stamp/components/StampItem';
import Modal from '@/stamp/components/Modal';
import TransitImage from '@/shared/assets/images/stamp/transit-image.png';
import DormitoryImage from '@/shared/assets/images/stamp/dormitory-image.png';
import LibraryImage from '@/shared/assets/images/stamp/library-image.png';
import ClubsImage from '@/shared/assets/images/stamp/clubs-image.png';
import FestivalImage from '@/shared/assets/images/stamp/festival-image.png';
import TuitionImage from '@/shared/assets/images/stamp/tuition-image.png';
import CoursesImage from '@/shared/assets/images/stamp/course-image.png';
import CurriculumImage from '@/shared/assets/images/stamp/curriculum-image.png';
import GradesImage from '@/shared/assets/images/stamp/grades-image.png';
import HostpitalImage from '@/shared/assets/images/stamp/hospital-image.png';
import InsuranceImage from '@/shared/assets/images/stamp/insurance-image.png';
import JobsImage from '@/shared/assets/images/stamp/jobs-image.png';
import KCultureImage from '@/shared/assets/images/stamp/kculture-image.png';

const stampList = [
  { name: 'Transit', image: TransitImage, status: true, description: 'ABCDEF' },
  {
    name: 'Dormitory',
    image: DormitoryImage,
    status: false,
    description: 'ABCDEF',
  },
  { name: 'Library', image: LibraryImage, status: true, description: 'ABCDEF' },
  { name: 'Clubs', image: ClubsImage, status: false, description: 'ABCDEF' },
  { name: 'Festival', image: FestivalImage, status: true },
  { name: 'Tuition', image: TuitionImage, status: true },
  { name: 'Courses', image: CoursesImage, status: false },
  { name: 'Curriculum', image: CurriculumImage, status: true },
  { name: 'Grades', image: GradesImage, status: false },
  { name: 'Hospital', image: HostpitalImage, status: true },
  { name: 'Insurance', image: InsuranceImage, status: false },
  { name: 'Jobs', image: JobsImage, status: true },
  { name: 'K-Culture', image: KCultureImage, status: false },
];

const StampList = (/*{ stampList }: { stampList: Stamp[] }*/) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStamp, setSelectedStamp] = useState<null | (typeof stampList)[0]>(null);

  console.log(isModalOpen, selectedStamp);
  const handleStampClick = (stamp: any) => {
    setSelectedStamp(stamp);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-wrap w-full mt-8">
      {stampList.map((item, index) => (
        <StampItem
          key={index}
          name={item.name}
          image={item.image}
          status={item.status}
          onClick={() => handleStampClick(item)} // 여기서 클릭 이벤트
        />
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stamp={selectedStamp}
      />
    </div>
  );
};

export default StampList;
