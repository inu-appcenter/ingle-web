import { ROUTES } from '@/router/routes';
import { useAuthStore } from '@/shared/stores/authStore';
import axios from 'axios';
import { MouseEvent, ReactNode, useState } from 'react';
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

interface CommonModalProps {
  isOpen: boolean;
  onClose: (event?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  onGoToRead?: () => void;
  children?: ReactNode;
}

const CommonModal = ({ isOpen, onClose, onGoToRead, children }: CommonModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-50 px-8"
      onClick={onClose}
    >
      <div
        className="px-6 pb-3 pt-4 w-full bg-[#ffffff] rounded-[30px] shadow-lg relative max-w-md flex flex-col gap-2 items-center justify-center  font-inter"
        onClick={e => e.stopPropagation()}
      >
        <img
          src="/icons/auth/close.svg"
          alt="close"
          className="absolute right-0 top-0 m-4"
          onClick={onClose}
        />
        <div className="m-6 flex flex-col items-center">
          <h2 className="font-bold text-2xl text-[#313131]">Login Failed</h2>
          <p className="text-sm text-[#535353]">Please try again</p>
        </div>
        <button
          className="bg-[#7949FF] w-full h-10 mx-10 rounded-md text-[#ffffff] text-sm"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default function Portal() {
  const { setStudentInfo, setStep, setTokens, studentId } = useAuthStore();
  const [showpw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const storedId = localStorage.getItem('portalId');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs, e: any) => {
    e.preventDefault(); //기본 제출 막기.

    try {
      const res = await axios.post(import.meta.env.VITE_PORTAL_URL, {
        studentId: data.studentId,
        password: data.password,
      });

      if (res.status === 200) {
        setStudentInfo({
          studentId: res.data.studentId,
          department: res.data.department,
          studentType: res.data.studentType,
          nickname: res.data.nickname,
        });
        setTokens(res.data.accessToken, res.data.accessTokenExpiresDate);

        navigate(ROUTES.TUTORIAL);
      } else if (res.status === 202) {
        setStudentInfo({ portalId: res.data.studentId });
        setStep('studentInfo');
      }

      if (remember === true) {
        localStorage.setItem('portalId', res.data.studentId);
      } else if (remember === false) {
        localStorage.removeItem('portalId');
      }
    } catch (err: any) {
      if (err.response?.status === 401) {
        setIsModalOpen(true);
      } else {
        setLoginError('Something is wrong.');
      }
    }
  };

  const handleVisibility = () => {
    setShowPw(!showpw);
  };

  const handleRemember = () => {
    setRemember(!remember);
  };

  return (
    <div className="flex flex-col justify-center w-full min-h-screen p-4">
      <InuLogo className="flex-1 w-[138px] h-[77px] mx-auto" />

      <h1 className="text-4xl font-extrabold mb-2">Log in</h1>
      <h1 className="text-base">Please Enter your INU Portal ID/PW</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-1 w-full justify-center gap-[20px] mt-[26px]"
      >
        {/*학번*/}
        <div className="flex items-center bg-[#F0EDFF]/80 rounded-2xl px-5 py-4">
          <Id className="mr-4" />
          <input
            {...register('studentId', {
              required: 'check your Id',
              onChange: e => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              },
            })}
            defaultValue={storedId || ''}
            placeholder="20XXXXXXX"
            className="bg-transparent outline-none flex-1 placeholder:text-[#C1C9D2]"
            aria-invalid={errors.studentId ? 'true' : 'false'}
          />
        </div>

        {/*비번*/}
        <div className="flex items-center bg-[#F0EDFF]/80 rounded-2xl px-5 py-4">
          <Pw className="mr-4" />
          <input
            {...register('password', {
              required: true,
              onChange: e => {
                e.target.value = e.target.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
              },
            })}
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
          {remember || storedId ? <Check className="mr-2" /> : <Empty className="mr-2" />}
          Remember Me
        </label>

        <p
          className={`text-red-500 text-sm text-center min-h-[20px] ${loginError ? 'visible' : 'invisible'}`}
        >
          {loginError || 'placeholder'}
        </p>

        <button
          className="mt-auto mb-4 mx-4 h-12 bg-[#7A00E6] text-white rounded-2xl"
          type="submit"
        >
          Log in
        </button>
      </form>

      <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
