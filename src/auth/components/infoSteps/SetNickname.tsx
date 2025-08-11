import Oicon from '@/auth/images/correct-circle.svg?url';
import Xicon from '@/auth/images/wrong-circle.svg?url';
import { useAuthStore } from '@/auth/stores/authStore';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SetNickname() {
  const { portalId, setStudentInfo } = useAuthStore();
  const [checkId, setCheckID] = useState<boolean | null>(null);
  const [isTaken, setIsTaken] = useState<boolean | null>(null);

  type UserInput = {
    studentId: string;
    nickname: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInput>();

  const onSubmit = async (data: UserInput, e: any) => {
    try {
      if (!(e?.nativeEvent instanceof SubmitEvent)) return;
      const submitter = e?.nativeEvent?.submitter as HTMLButtonElement;

      if (submitter.name === 'id') {
        if (portalId !== data.studentId) {
          setCheckID(false);
          console.log('학번 불일치');
        } else {
          setCheckID(true);
          console.log('학번 일치');
        }
      } else {
        const res = await axios.get(import.meta.env.VITE_NICK_CHECK_URL, {
          params: { nickname: data.nickname },
        });
        if (res.data === true) {
          //중복임
          console.log('중복임');
          setIsTaken(true);
        } else {
          //중복 아님
          console.log('중복 아님');
          setIsTaken(false);
        }
      }
      if (checkId && !isTaken) {
        setStudentInfo({ nickname: data.nickname });
      }
    } catch (err) {}
  };

  const onError = (errors: any) => {
    if (errors.nickname) {
      alert('닉네임은 3~20자 사이의 문자열만 허용합니다.');
    }
    console.log('wrong');
  };

  return (
    <div>
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-2">StudentID</p>
        <input
          {...register('studentId')}
          type="text"
          placeholder="20XXXXXXX"
          className="text-sm p-3 rounded-xl outline-none border border-[#9EA1A8]"
        />
        {checkId !== null &&
          (checkId ? (
            <img src={Oicon} className="w-4 h-4" />
          ) : (
            <img src={Xicon} className="w-4 h-4" />
          ))}
        <button type="submit" name="id">
          학번확인
        </button>

        <p className="mb-2">nickname</p>
        <input
          {...register('nickname', { minLength: 3, maxLength: 20 })}
          type="text"
          placeholder="nickname"
          className="text-sm p-3 rounded-xl outline-none border border-[#9EA1A8]"
        />
        {isTaken !== null &&
          (!isTaken ? (
            <img src={Oicon} className="w-4 h-4" />
          ) : (
            <img src={Xicon} className="w-4 h-4" />
          ))}
        <button type="submit" name="nick">
          중복확인
        </button>
      </form>
    </div>
  );
}
