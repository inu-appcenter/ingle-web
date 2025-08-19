import { isTakenNickname } from '@/auth/api/auth';
import Oicon from '@/auth/images/nick-setting/correct-circle.svg?react';
import Xicon from '@/auth/images/nick-setting/wrong-circle.svg?react';
import { useAuthStore } from '@/auth/stores/authStore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SetNickname() {
  const { portalId, setStudentInfo } = useAuthStore();
  const [checkId, setCheckID] = useState<boolean | undefined>(undefined);
  const [isTaken, setIsTaken] = useState<boolean | undefined>(undefined);

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
    const submitter = e?.nativeEvent?.submitter as HTMLButtonElement;
    //학번 제출
    if (submitter.name === 'id') {
      console.log('학번제출:', data.studentId);
      if (data.studentId === portalId) {
        console.log('학번 확인 완료');
        setCheckID(true);
        setStudentInfo({ studentId: data.studentId });
      } else {
        setCheckID(false);
      }
    }
    // 닉네임 제출
    else if (submitter.name === 'nick') {
      console.log('입력한 닉네임:', data.nickname);
      if (data.nickname.length < 3 || data.nickname.length > 20) {
        console.log('닉네임은 3~20자 사이입니다');
        return;
      }
      // 중복회원 확인 api
      const isTaken = await isTakenNickname({ nickname: data.nickname });
      console.log(isTaken);
      if (isTaken) {
        setIsTaken(true);
      } else setIsTaken(false);
      if (checkId && !isTaken) {
        setStudentInfo({ nickname: data.nickname });
      }
    }
  };

  const onError = () => {
    if (errors.nickname) {
      alert('닉네임은 3~20자 사이입니다');
      setIsTaken(undefined);
      setStudentInfo({ nickname: '' });
    }
  };

  return (
    <div>
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit, onError)}>
        {/* 학번 체크 */}
        <div className="mb-8">
          <p className="mb-2">StudentID</p>
          <div className="relative w-full">
            <input
              {...register('studentId', { required: true })}
              type="text"
              placeholder="20XXXXXXX"
              className="text-sm p-3 rounded-xl outline-none border border-[#9EA1A8] w-full"
              readOnly={checkId}
            />
            {/* [ ] 엔터로만 제출되는 게 잘 안되어서 우선 버튼 만들어놓았습니다.. */}
            <button
              type="submit"
              name="id"
              className={`absolute top-1/2 right-3 transform -translate-y-1/2 w-12 h-7 rounded-lg bg-[#9681EB] text-white text-xs z-10`}
            >
              check
            </button>
          </div>
          {checkId !== undefined &&
            (checkId ? (
              <div className="flex items-center p-1">
                <Oicon className="w-4 h-4 mx-1" />
                <p>Correct!</p>
              </div>
            ) : (
              <div className="flex items-center p-1">
                <Xicon className="w-4 h-4 mx-1" />
                <p>Doesn't match</p>
              </div>
            ))}
        </div>

        <div className={`${!checkId && 'invisible'}`}>
          <p className="mb-2">Nickname {checkId && '1'}</p>
          <div className="relative w-full">
            <input
              {...register('nickname', { minLength: 3, maxLength: 20 })}
              type="text"
              placeholder="nickname"
              className="text-sm p-3 rounded-xl outline-none border border-[#9EA1A8] w-full"
            />
            <button
              type="submit"
              name="nick"
              disabled={!checkId}
              className={`absolute top-1/2 right-3 transform -translate-y-1/2 w-12 h-7 rounded-lg ${checkId ? 'bg-[#9681EB]' : 'bg-[#CEC6E3]'} text-white text-xs z-10`}
            >
              check
            </button>
          </div>
          {isTaken !== undefined &&
            (!isTaken ? (
              <div className="flex items-center  p-1">
                <Oicon className="w-4 h-4 mx-1" />
                <p>Available!</p>
              </div>
            ) : (
              <div className="flex items-center p-1">
                <Xicon className="w-4 h-4 mx-1" />
                <p>Already taken</p>
              </div>
            ))}
        </div>
      </form>
    </div>
  );
}
