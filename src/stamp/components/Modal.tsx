import CommonModal from '@/shared/components/CommonModal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  stamp: { name: string; image: string; status: boolean } | null;
}

const Modal = ({ isOpen, onClose, stamp }: ModalProps) => {
  if (!stamp) return null;

  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <img
        src={stamp.image}
        alt={`${stamp.name} 이미지`}
        className="min-w-20 max-w-56"
      />
      <p className="mb-3">congrats</p>
      <div className="rounded-[30px] bg-[#ffffff] w-60 h-10 flex justify-center items-center mb-6">
        <p className="text-[#7A00E6] text-2xl font-bold">{stamp.name}</p>
      </div>
      <div className="flex flex-col justify-center items-center text-[#ffffff] font-bold text-xl">
        <p>Airport ↔ INU</p>
        <p>Subway, buses, Bike</p>
      </div>
    </CommonModal>
  );
};

export default Modal;
