// @/shared/components/CommonModal.tsx
import StampButton from '@/stamp/components/StampButton';
import { ReactNode, MouseEvent } from 'react';

interface CommonModalProps {
  isOpen: boolean;
  onClose: (event?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  onGoToRead?: () => void;
  children: ReactNode;
}

const CommonModal = ({ isOpen, onClose, onGoToRead, children }: CommonModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div className="text-2xl font-bold text-[#ffffff] flex flex-col gap-4 items-center my-5">
        <h2>Congratulations!</h2>
        <h2>You have just get a stamp</h2>
      </div>
      <div
        className="bg-[#ffffff] rounded-lg shadow-lg p-6 relative max-w-md flex flex-col items-center justify-center h-[510px] text-[#ffffff]"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
      <div className="max-w-96 w-full px-8 mt-8 flex flex-col gap-8">
        <StampButton className="text-[#ffffff]" onClick={onGoToRead || (() => {})}>
          Go to read
        </StampButton>
        <StampButton onClick={onClose} className="bg-[#ffffff] text-[#000000]">
          Close
        </StampButton>
      </div>
    </div>
  );
};

export default CommonModal;
