import { useAuthStore } from '../stores/authStore';

export default function Intro() {
  const currnetStep = useAuthStore(state => state.currentStep);
  const setStep = useAuthStore(state => state.setStep);

  return (
    <div>
      <h1>ingle</h1>
      <h1>Your Global Guide Book for INU Students</h1>
      <p>
        Everything you need to know about life at INU. All-in-one guide to
        campus, classes, and daily life.
      </p>
      {/* 여기에 추가적인 앱 소개 내용을 작성할 수 있습니다 */}
      <button
        className="m-8 w-[80%] h-12 border border-color-gray rounded-2xl"
        onClick={() => {
          setStep('portal');
        }}
      >
        Get Start
      </button>
    </div>
  );
}
