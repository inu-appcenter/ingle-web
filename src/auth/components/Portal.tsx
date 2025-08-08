import axios from 'axios';
import { useForm } from 'react-hook-form';
import inuLogo from '../images/portalLogo.svg?url';
import { useAuthStore } from '../stores/authStore';

type Inputs = {
  studentId: string;
  password: string;
};

export default function Portal() {
  const setStep = useAuthStore(state => state.setStep);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  // const onSubmit = handleSubmit(data => console.log(data));

  console.log(errors);

  const onSubmit = async (data: Inputs, e) => {
    e.preventDefault(); //기본 제출 막기.
    try {
      const res = await axios.post(
        'https://ingle-server.inuappcenter.kr/api/v1/auth/login',
        {
          studentId: data.studentId,
          password: data.password,
        },
      );
      console.log('로그인 성공', res.data);
      //토큰 저장? 서버에?
      setStep('studentInfo');
    } catch (err) {
      //로그인 실패
      console.error('post 오류:', err);
      //id 비번 확인 또는 회원가입 안 돼있음.
    }
  };

  const onError = () => {
    console.log('wrong');
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
            type="password"
          />
        </div>

        {/* <label className="flex items-center text-sm text-gray-600">
          <input type="checkbox" className="mr-2" {...register('rememberMe')} />
          Remember Me
        </label> */}

        <button
          className="mb-4 mx-4 h-12 bg-[#7A00E6] text-white rounded-2xl"
          type="submit"
          // onClick={data => {
          //   console.log(data);
          //   //초기화
          //   setValue('studentId', '');
          //   setValue('password', '');
          // }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}
