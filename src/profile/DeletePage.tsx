import Header from '@/profile/components/Header';
import Button from '@/tutorials/components/Button';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const DeletePage = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');

  const handleDelete = () => {
    if (!reason) {
      alert('탈퇴 사유를 선택해주세요.');
      return;
    }

    // API 연동은 추후 추가 예정
    console.log('선택한 탈퇴 사유:', reason);
    navigate('/'); // 원하는 경로로 수정 가능
  };

  return (
    <div className="bg-[#F9F9F9] h-full flex flex-col">
      <Header>Delete Account</Header>
      <main className="px-4 flex flex-col flex-1 gap-5">
        <p>
          Thank you for using INGLE. Please take a moment to let us know why you are
          leaving.
        </p>
        <div className="flex flex-col gap-5">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="reason"
              value="not-using"
              checked={reason === 'not-using'}
              onChange={e => setReason(e.target.value)}
            />
            No longer using the service
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="reason"
              value="alternative"
              checked={reason === 'alternative'}
              onChange={e => setReason(e.target.value)}
            />
            Found a better alternative
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="reason"
              value="privacy"
              checked={reason === 'privacy'}
              onChange={e => setReason(e.target.value)}
            />
            Privacy concerns
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="reason"
              value="difficulty"
              checked={reason === 'difficulty'}
              onChange={e => setReason(e.target.value)}
            />
            Difficulty navigating the platform
          </label>
        </div>
      </main>
      <div onClick={handleDelete} className="px-4 py-4">
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default DeletePage;
