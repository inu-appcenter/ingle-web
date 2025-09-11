// import BackIcon from '@/shared/assets/icons/back-icon.svg?react';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';

const Header = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <header className="h-16 flex w-full items-center">
      <img
        src="/icons/back-icon.svg"
        alt="Back"
        className="w-6 h-6 mx-4 cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      />
      <p className="text-2xl font-bold">{children}</p>
    </header>
  );
};

export default Header;
