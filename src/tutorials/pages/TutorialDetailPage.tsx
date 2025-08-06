import NotFoundPage from '@/not-fuound';
import ClubsPage from '@/tutorials/pages/detail-page/ClubsPage';
import CoursesPage from '@/tutorials/pages/detail-page/CoursesPage';
import CurriculumPage from '@/tutorials/pages/detail-page/CurriculumPage';
import DormitoryPage from '@/tutorials/pages/detail-page/DormitoryPage';
import FestivalPage from '@/tutorials/pages/detail-page/FestivalPage';
import GradesPage from '@/tutorials/pages/detail-page/GradesPage';
import HospitalPage from '@/tutorials/pages/detail-page/HospitalPage';
import InsurancePage from '@/tutorials/pages/detail-page/InsurancePage';
import JobsPage from '@/tutorials/pages/detail-page/JobsPage';
import KCulturePage from '@/tutorials/pages/detail-page/KCulturePage';
import LibraryPage from '@/tutorials/pages/detail-page/LibraryPage';
import TransitPage from '@/tutorials/pages/detail-page/TransitPage';
import TuitionPage from '@/tutorials/pages/detail-page/TuitionPage';
import { ReactNode } from 'react';
import { useParams } from 'react-router';

const TutorialDetailPage = () => {
  const { params } = useParams<{ params: string }>();

  const tutorialMap: Record<string, ReactNode> = {
    transit: <TransitPage />,
    dormitory: <DormitoryPage />,
    library: <LibraryPage />,
    festival: <FestivalPage />,
    clubs: <ClubsPage />,
    tuition: <TuitionPage />,
    courses: <CoursesPage />,
    curriculum: <CurriculumPage />,
    grades: <GradesPage />,
    hospital: <HospitalPage />,
    insurance: <InsurancePage />,
    jobs: <JobsPage />,
    'k-culture': <KCulturePage />,
  };

  // 디버깅을 위해 추가
  console.log('Current params:', params);
  console.log('Available keys:', Object.keys(tutorialMap));

  return <div>{tutorialMap[params ?? ''] ?? <NotFoundPage />}</div>;
};

export default TutorialDetailPage;
