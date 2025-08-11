import Image from '@/auth/images/introgroup.svg?url';
import { useAuthStore } from '@/auth/stores/authStore';

export default function Intro() {
  const setStep = useAuthStore(state => state.setStep);

  return (
    <div className="flex flex-col p-4 w-full h-screen">
      <div className="flex flex-col flex-grow justify-center">
        <img src={Image} alt="image" className="w-full" />
        <div className="text-4xl font-extrabold mt-3">
          <h1>Your Global</h1>
          <h1 className="text-[#7A00E6]">Guide Book</h1>
          <h1>for INU Students</h1>
        </div>
        <p className="mt-14 text-sm">
          Everything you need to know about life at INU. <br />
          All-in-one guide to campus, classes, and daily life.
        </p>
      </div>
      <button
        className="flex-none m-4 h-12 bg-[#7A00E6] text-white text-lg font-semibold rounded-2xl"
        onClick={() => {
          setStep('portal');
        }}
      >
        Get Started
      </button>
    </div>
  );
}
