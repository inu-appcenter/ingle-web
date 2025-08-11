// @/shared/components/CommonModal.tsx
import { ReactNode, MouseEvent } from 'react';

interface CommonModalProps {
  isOpen: boolean;
  onClose: (event?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  children: ReactNode;
}

const CommonModal = ({ isOpen, onClose, children }: CommonModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#7A00E6] rounded-lg shadow-lg p-6 relative max-w-md w-full flex flex-col items-center justify-center h-[510px] text-[#ffffff]"
        onClick={e => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default CommonModal;
