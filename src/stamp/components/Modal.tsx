import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonModal from '@/shared/components/CommonModal';
import { ImageSkeleton } from '@/shared/components/SkeletonUI';
import { ROUTES } from '@/router/routes';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  stamp: { name: string; imageUrl: string; completed: boolean; keyword: string } | null;
}

const Modal = ({ isOpen, onClose, stamp }: ModalProps) => {
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

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

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <CommonModal isOpen={isOpen} onClose={onClose} onGoToRead={handleGoToRead}>
      <p className="text-[#000000] text-4xl font-bold">{stamp.name}</p>

      <div className="relative mt-10 flex justify-center">
        {imageLoading && (
          <ImageSkeleton width="w-56" height="h-56" className="rounded-lg" />
        )}

        {!imageError && (
          <img
            src={stamp.imageUrl}
            alt={`${stamp.name} 이미지`}
            className={`min-w-20 max-w-56 transition duration-300 ${
              imageLoading ? 'opacity-0 absolute' : 'opacity-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {imageError && (
          <div className="w-56 h-56 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">이미지 없음</span>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center text-[#ffffff] font-bold text-xl">
        <p>{stamp.keyword}</p>
      </div>
    </CommonModal>
  );
};

export default Modal;
