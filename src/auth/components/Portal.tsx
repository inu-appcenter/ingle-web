import { useForm } from 'react-hook-form';
import inuLogo from '../inuportal.svg';
import { useAuthStore } from '../stores/authStore';

type LoginForm = {
  studentId: string;
  password: string;
  rememberMe: boolean;
};

export default function Intro() {
  const currnetStep = useAuthStore(state => state.currentStep);
  const setStep = useAuthStore(state => state.setStep);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data); // 여기서 로그인 로직 수행
    // 예: setStep('nextStep');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <img src={inuLogo} alt="Inu Portal Logo" className="mb-16" />

      {/* 로그인 폼 */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[85%] h-100 bg-[#094A9A] p-4 rounded-xl text-center text-white"
      >
        <p className="text-2xl font-extrabold">INU Portal Login</p>
        <p className="text-base">Enter your INU Student ID and Password.</p>

        <div className="flex flex-col items-center justify-center mt-6 w-full">
          {/* 학번 입력 */}
          <input
            type="text"
            placeholder="Student ID"
            className="w-full h-12 mb-5 px-3 py-2 rounded-md text-black"
            {...register('studentId', { required: 'Student ID is required' })}
          />
          {errors.studentId && (
            <p className="text-red-300 text-sm mt-1">
              {errors.studentId.message}
            </p>
          )}
          {/* 비밀번호 입력 */}
          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 px-3 py-2 rounded-md text-black"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Remember Me 체크박스 */}
          <label className="my-3 flex items-center gap-2 w-full text-left">
            <input type="checkbox" {...register('rememberMe')} />
            Remember Me
          </label>
          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-[90%] h-12 py-2 rounded-[22px] bg-yellow-400 text-[#094A9A] font-semibold"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
