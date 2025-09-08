import instance from '@/shared/api/intercepter';
import { ReactNode } from 'react';

const Button = ({
  children,
  tutorialNum,
}: {
  children: ReactNode;
  tutorialNum?: number;
}) => {
  const handleSend = async () => {
    try {
      const res = await instance.post(`/api/v1/stamps/tutorials/${tutorialNum}/complete`);
      console.log('튜토리얼 완료 처리 결과:', res.data);
      alert(`튜토리얼 ${tutorialNum}이(가) 성공적으로 완료 처리되었습니다!`);
    } catch (error: any) {
      console.error('피드백 전송 오류:', error);
      alert(error.response?.data?.message);
    }
  };

  return (
    <button
      onClick={tutorialNum ? handleSend : undefined}
      className="flex w-full bg-[#7949FF] h-11 text-[#ffffff] justify-center items-center rounded-md"
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
