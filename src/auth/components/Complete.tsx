import Image from '@/auth/images/ID.svg?react';
import { ROUTES } from '@/router/routes';
import { useNavigate } from 'react-router';

export default function Complete() {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate(ROUTES.TUTORIAL);
  };

  return (
    <div className="translate-y-[-20px] w-full h-screen p-4 flex flex-col justify-center items-center">
      <div className="overflow-hidden">
        <Image className="translate-y-3" />
      </div>

      <div className="text-center font-bold text-2xl/8 mb-3">
        Your account
        <br />
        was successfully created!
      </div>
      <div className="mb-6">Only one click to explore INGLE Guide book.</div>
      <button
        onClick={gotoHome}
        className="h-14 text-xl font-semibold text-white w-full bg-[#6400CD] rounded-xl"
      >
        Go to Home
      </button>
    </div>
  );
}
