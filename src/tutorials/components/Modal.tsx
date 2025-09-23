import { ROUTES } from '@/router/routes';
import Close from '@/shared/assets/icons/close-icon.svg?react';
import RewardBox from '@/shared/assets/icons/tutorial-modal-icon.svg?react';
import { useNavigate } from 'react-router-dom';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  //   onGoToStamp: () => void;
  //   children: React.ReactNode;
}

const TutorialModal = ({ isOpen, onClose }: TutorialModalProps) => {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const goToStamp = () => {
    navigate(ROUTES.STAMP); //스탬프 페이지로 이동
    onClose(); //모달 닫기
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex flex-col items-center justify-end z-50 "
      onClick={onClose}
    >
      <div className="relative max-w-[480px] px-5 pt-16 pb-8 fixed bottom-0 flex flex-col bg-white rounded-t-[30px] w-full">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2">
          <RewardBox />
        </div>
        <Close className="absolute top-4 right-4" onClick={onClose} />
        <h2 className="place-self-center text-[#313131] font-bold text-2xl font-inter">
          Congrats!
        </h2>
        <h3 className="place-self-center text-[#535353] text-sm font-inter">
          You got a new one!
        </h3>
        <button
          className="mt-6 h-10 bg-[#7949FF] rounded-md text-sm font-inter text-white"
          onClick={goToStamp}
        >
          Go to my Stamp
        </button>
      </div>
    </div>
  );
};

export default TutorialModal;
