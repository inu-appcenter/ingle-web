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
import { useLocation } from 'react-router';

const TutorialDetailPage = () => {
  const location = useLocation();

  // URL 경로에서 페이지 타입 결정
  const getPageType = (pathname: string) => {
    if (pathname.includes('/transit')) return 'transit';
    if (pathname.includes('/dormitory')) return 'dormitory';
    if (pathname.includes('/library')) return 'library';
    if (pathname.includes('/festival')) return 'festival';
    if (pathname.includes('/clubs')) return 'clubs';
    if (pathname.includes('/tuition')) return 'tuition';
    if (pathname.includes('/courses')) return 'courses';
    if (pathname.includes('/curriculum')) return 'curriculum';
    if (pathname.includes('/grades')) return 'grades';
    if (pathname.includes('/hospital')) return 'hospital';
    if (pathname.includes('/insurance')) return 'insurance';
    if (pathname.includes('/jobs')) return 'jobs';
    if (pathname.includes('/k-culture')) return 'k-culture';
    return null;
  };

  const pageType = getPageType(location.pathname);

  const tutorialMap: Record<string, JSX.Element> = {
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

  if (!pageType || !tutorialMap[pageType]) {
    return <NotFoundPage />;
  }

  return <div>{tutorialMap[pageType]}</div>;
};

export default TutorialDetailPage;
