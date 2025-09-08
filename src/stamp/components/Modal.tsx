import { useNavigate } from 'react-router-dom';
import CommonModal from '@/shared/components/CommonModal';
import { ROUTES } from '@/router/routes';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  stamp: { name: string; imageUrl: string; completed: boolean; keyword: string } | null;
}

const Modal = ({ isOpen, onClose, stamp }: ModalProps) => {
  const navigate = useNavigate();

  if (!stamp) return null;

  // 스탬프 이름을 라우트로 매핑하는 함수
  const getRouteByStampName = (stampName: string): string => {
    const routeMap: Record<string, string> = {
      Transit: ROUTES.TRANSIT,
      Dormitory: ROUTES.DORMITORY,
      Library: ROUTES.LIBRARY,
      Clubs: ROUTES.CLUBS,
      Festival: ROUTES.FESTIVAL,
      Tuition: ROUTES.TUITION,
      Courses: ROUTES.COURSES,
      Curriculum: ROUTES.CURRICULUM,
      Grades: ROUTES.GRADES,
      Hospital: ROUTES.HOSPITAL,
      Insurance: ROUTES.INSURANCE,
      Jobs: ROUTES.JOBS,
      'K-Culture': ROUTES.K_CULTURE,
    };

    return routeMap[stampName] || ROUTES.TUTORIAL;
  };

  const handleGoToRead = () => {
    const route = getRouteByStampName(stamp.name);
    navigate(route);
    onClose(); // 모달 닫기
  };

  return (
    <CommonModal isOpen={isOpen} onClose={onClose} onGoToRead={handleGoToRead}>
      <p className="text-[#000000] text-4xl font-bold">{stamp.name}</p>
      <img
        src={stamp.imageUrl}
        alt={`${stamp.name} 이미지`}
        className="min-w-20 max-w-56 mt-10"
      />

      <div className="flex flex-col justify-center items-center text-[#ffffff] font-bold text-xl">
        <p>{stamp.keyword}</p>
      </div>
    </CommonModal>
  );
};

export default Modal;
