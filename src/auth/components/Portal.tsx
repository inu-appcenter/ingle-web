import { useAuthStore } from '@/auth/stores/authStore';
import { ROUTES } from '@/router/routes';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

// 이미지
import Check from '@/auth/images/portal-page/check.svg?react';
import Empty from '@/auth/images/portal-page/empty.svg?react';
import CloseEye from '@/auth/images/portal-page/eyeclose.svg?react';
import OpenEye from '@/auth/images/portal-page/eyeopen.svg?react';
import Id from '@/auth/images/portal-page/id.svg?react';
import InuLogo from '@/auth/images/portal-page/portalLogo.svg?react';
import Pw from '@/auth/images/portal-page/pw.svg?react';

type Inputs = {
  studentId: string;
  password: string;
};

export default function Portal() {
  const { setStudentInfo, setStep } = useAuthStore();
  const [showpw, setShowPw] = useState(false);
  const [ischecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(errors);

  const onSubmit = async (data: Inputs, e: any) => {
    e.preventDefault(); //기본 제출 막기.
    try {
      const res = await axios.post(import.meta.env.VITE_PORTAL_URL, {
        studentId: data.studentId,
        password: data.password,
      });
      if (res.status === 200) {
        const { accessToken, refreshToken } = res.data;
        useAuthStore.getState().setTokens(accessToken, refreshToken);
        console.log('로그인 성공');
        // [ ] 성공했을 때 처리

        //홈으로.
        navigate(ROUTES.TUTORIAL);
      } else if (res.status === 202) {
        alert(res.data.message); // 회원 가입이 필요합니다.
        setStudentInfo({ portalId: res.data.studentId });
        setStep('studentInfo'); //회원가입 단계로 넘어감
      }
    } catch (err: any) {
      // [ ] 요 조건문의 의미 = 응답이 왔는데 상태가 401
      if (err.response && err.response.status === 401) {
        alert(err.data.message); //로그인이 실패하였습니다.
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  const onError = (errors: any) => {
    if (errors.studentId.type === 'required') {
      alert('학번을 입력해주세요');
    } else if (errors.studentId.type === 'minLength') {
      alert('학번을 다시 입력해주세요');
    } else if (errors.password.type === 'required') {
      alert('비밀번호를 입력해주세요');
    }
    console.log('wrong');
  };

  const handleVisibility = () => {
    setShowPw(!showpw);
  };

  {
    /* [ ] 기능연결 : 버튼 누르면 마지막으로 저장된 remember 상태도 저장해야 됨*/
  }
  const handleRemember = () => {
    setIsChecked(!ischecked);
  };

  return (
    <div className="flex flex-col justify-center w-full min-h-screen p-4">
      <InuLogo className="flex-1 w-[138px] h-[77px] mx-auto" />

      <h1 className="text-4xl font-extrabold mb-2">Log in</h1>
      <h1 className="text-base">Please Enter your INU Portal ID/PW</h1>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col flex-1 w-full justify-center gap-[20px] mt-[26px]"
      >
        {/*[ ] 에러 처리 필요.. */}
        {/*학번*/}
        <div className="flex items-center bg-[#F0EDFF]/80 rounded-2xl px-5 py-4">
          <Id className="mr-4" />
          <input
            {...register('studentId', {
              required: true,
            })}
            placeholder="20XXXXXXX"
            className="bg-transparent outline-none flex-1 placeholder:text-[#C1C9D2]"
            aria-invalid={errors.studentId ? 'true' : 'false'}
          />
          {errors.studentId?.type === 'required' && (
            <p role="alert">First name is required</p>
          )}
        </div>

        {/*비번*/}
        <div className="flex items-center bg-[#F0EDFF]/80 rounded-2xl px-5 py-4">
          <Pw className="mr-4" />
          <input
            {...register('password', { required: true })}
            className="bg-transparent outline-none flex-1 placeholder:text-[#C1C9D2]"
            placeholder="Password"
            type={showpw ? 'text' : 'password'}
          />
          <span className="pr-2" onClick={handleVisibility}>
            {showpw ? <OpenEye /> : <CloseEye />}
          </span>
        </div>

        <label
          onClick={handleRemember}
          className="flex items-center text-sm text-gray-600"
        >
          {ischecked ? <Check className="mr-2" /> : <Empty className="mr-2" />}
          Remember Me
        </label>
        {/*[ ] 버튼은... form 안에*/}
        <button
          className="mt-auto flex-none mb-4 mx-4 h-12 bg-[#7A00E6] text-white rounded-2xl"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
