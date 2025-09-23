import instance from '@/shared/api/intercepter';
import { useTutorialModal } from '@/shared/stores/modalStore';
import { ReactNode, useState } from 'react';

// tutorialNum 이 있으면 post요청을 보내고
// 없으면 그냥 버튼 역할만 함
const Button = ({
  children,
  tutorialNum,
}: {
  children: ReactNode;
  tutorialNum?: number;
}) => {
  const { isOpen, openModal, closeModal } = useTutorialModal();
  const [isRead, setIsRead] = useState(false);

  const handleSend = async () => {
    try {
      const res = await instance.post(`/api/v1/stamps/tutorials/${tutorialNum}/complete`);
      console.log('튜토리얼 완료 처리 결과:', res.data);
      openModal();
    } catch (error: any) {
      console.error('피드백 전송 오류:', error);
      setIsRead(true);
    }
  };

  return (
    <button
      onClick={tutorialNum ? handleSend : undefined}
      className={`flex w-full ${isRead ? 'bg-[#C1C9D2]' : 'bg-[#7949FF]'} h-11 text-[#ffffff] justify-center items-center rounded-md`}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
