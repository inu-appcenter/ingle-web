import BackIcon from '@/shared/assets/icons/back-icon.svg?react';
import { ReactNode } from 'react';

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header className="h-12 flex w-full items-center">
      <BackIcon className="mx-4" />
      <p className="text-2xl font-bold">{children}</p>
    </header>
  );
};

export default Header;
