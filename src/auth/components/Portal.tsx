import inuLogo from '@/auth/images/portalLogo.svg?url';
import { useAuthStore } from '@/auth/stores/authStore';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import closeEye from '@/auth/images/eyeclose.svg?url';
import openEye from '@/auth/images/eyeopen.svg?url';

type Inputs = {
  studentId: string;
  password: string;
};

export default function Portal() {
  const { setStudentInfo, setStep } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  // const onSubmit = handleSubmit(data => console.log(data));

  console.log(errors);

  const onSubmit = async (data: Inputs, e: any) => {
    e.preventDefault(); //기본 제출 막기.
    try {
      const res = await axios.post(import.meta.env.VITE_PORTAL_URL, {
        studentId: data.studentId,
        password: data.password,
      });
      if (res.status === 200) {
        console.log('로그인 성공'); //홈으로.
        /*성공일 경우 처리해야 하는 것.*/

        //   {
        //   "memberId": 1,
        //   "studentId": "202301452",
        //   "department": "Dept. of Computer Science & Engineering",
        //   "program": "Exchange Student",
        //   "nickname": "IngleFan",
        //   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        //   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        //   "accessTokenExpiresDate": "2025-05-14T15:30:00+09:00",
        //   "refreshTokenExpiresDate": "2025-05-14T15:30:00+09:00"
        // }
      } else if (res.status === 202) {
        alert(res.data.message); // 회원 가입이 필요합니다.
        setStudentInfo({ portalId: res.data.studentId });
        //회원가입 api 호출 필요
        //(여기서 회원가입이란 ingle 회원가입을 의미)
        //
        setStep('studentInfo');
      }
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        alert('아이디 또는 비밀번호를 확인하세요.');
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  const onError = (errors: any) => {
    if (errors.studentId) {
      alert('학번은 9자리 숫자입니다');
    } else if (errors.password) {
      alert('비밀번호를 다시 입력해주세요');
    }
    console.log('wrong');
  };

  const [showpw, setShowPw] = useState(false);
  const handleVisibility = () => {
    setShowPw(!showpw);
  };

  return (
    <div className="relative flex flex-col justify-center w-full min-h-screen p-4">
      <img
        src={inuLogo}
        alt="Inu Portal Logo"
        className="w-[138px] h-[77px] mb-6 mx-auto"
      />

      <h1 className="text-4xl font-extrabold mb-2">Log in</h1>
      <h1 className="text-base">Please Enter your INU Portal ID/PW</h1>

      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col w-full justify-center gap-[21px] my-[26px]"
      >
        <div
          className="flex items-center bg-[#F0EDFFCC] rounded-2xl px-4
         py-4"
        >
          <span className="text-gray-400 mr-2">아이콘</span>
          <input
            {...register('studentId', { required: true, minLength: 9 })}
            placeholder="20XXXXXXX"
            className="bg-transparent outline-none flex-1"
          />
        </div>

        <div
          className="flex items-center bg-[#F0EDFFCC] rounded-2xl px-4
         py-4"
        >
          <span className="text-gray-400 mr-2">아이콘</span>
          <input
            {...register('password', { required: true })}
            className="bg-transparent outline-none flex-1"
            placeholder="Password"
            type={showpw ? 'text' : 'password'}
          />
          <span className="pr-2" onClick={handleVisibility}>
            {showpw ? <img src={openEye} /> : <img src={closeEye} />}
          </span>
        </div>

        {/* <label className="flex items-center text-sm text-gray-600">
          <input type="checkbox" className="mr-2" {...register('rememberMe')} />
          Remember Me
        </label> */}

        <button
          className="mb-4 mx-4 h-12 bg-[#7A00E6] text-white rounded-2xl"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
