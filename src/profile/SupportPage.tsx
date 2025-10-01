import Header from '@/profile/components/Header';
import instance from '@/shared/api/intercepter';
import Button from '@/tutorials/components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SupportPage = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');

  const handleSend = async () => {
    try {
      const res = await instance.post('/api/v1/members/feedback', {
        content: feedback,
      });
      console.log(res);
      navigate(-1); // 전송 후 뒤로가기
    } catch (error) {
      console.error(error);
      alert('피드백 전송 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="bg-[#F9F9F9] h-full flex flex-col">
      <Header>Support</Header>
      <main className="px-4 flex flex-col flex-1 gap-5">
        <h2 className="text-2xl font-bold">We value your feedback</h2>
        <p>
          Share what features or improvements you’d like to see, and we’ll work to make
          the app even better for you.
        </p>
        <textarea
          className="border border-[#9EA1A8] rounded-xl h-40 px-4 py-5 outline-none"
          placeholder="e.g., Add more 00000 information"
          value={feedback}
          onChange={e => setFeedback(e.target.value)} // ✅ 상태 관리
        />
      </main>
      <div onClick={handleSend} className="px-4 py-4">
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default SupportPage;
