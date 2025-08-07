import { useEffect, useState } from 'react';
import Image from '../images/exchange.svg?url';
import { useAuthStore } from '../stores/authStore';

import AppLogo from '../images/Ingle.svg?url';

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
        <img src={AppLogo} alt="Ingle Logo" className="w-[145px] h-[87px]" />
      </div>

      {/* 두 번째 화면 */}
      <div
        className={`relative p-4 w-full h-screen flex flex-col justify-between transition-opacity duration-200 ${
          showAppName ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div></div>
        <div className="flex flex-col">
          <img src={Image} alt="image" className="w-40 mb-4" />
          <div className="text-3xl font-extrabold">
            <h1>Your Global</h1>
            <h1 className="text-[#7A00E6]">Guide Book</h1>
            <h1>for INU Students</h1>
          </div>
          <p className="my-4 text-sm">
            Everything you need to know about life at INU. All-in-one guide to
            campus, classes, and daily life.
          </p>
        </div>
        <button
          className="absolute-auto m-4 h-12 bg-[#7A00E6] text-white rounded-2xl"
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
