import { useAuthStore } from '@/auth/stores/authStore';

function SetNickname() {
  const nickname = useAuthStore(state => state.nickname);
  const setStudentInfo = useAuthStore(state => state.setStudentInfo);

  return (
    <>
      <div>닉네임 입력 컴포넌트</div>
    </>
  );
}

export default SetNickname;
