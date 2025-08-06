import { useEffect, useState } from 'react';
import { useAuthStore } from '../stores/authStore';

export default function Intro() {
  const currnetStep = useAuthStore(state => state.currentStep);
  const setStep = useAuthStore(state => state.setStep);

  const [showAppName, setShowAppName] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAppName(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* 첫 번째 화면 */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 
      ${showAppName ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: '#7949FF' }}
      >
        <h1 className="text-4xl text-white font-bold">Ingle</h1>
      </div>

      {/* 두 번째 화면 */}
      <div
        className={`w-[80%] flex flex-col items-center justify-center transition-opacity duration-200 ${
          showAppName ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <img src="/intro-img.png" alt="image" className="w-40 mb-4" />
        <h1>Your Global Guide Book for INU Students</h1>
        <p className="mb-4 text-center">
          Everything you need to know about life at INU. All-in-one guide to
          campus, classes, and daily life.
        </p>
        <button
          className="m-8 w-full h-12 border border-color-['#7A00E6'] rounded-2xl"
          onClick={() => {
            setStep('portal');
          }}
        >
          Get Start
        </button>
      </div>
    </div>
  );
}
