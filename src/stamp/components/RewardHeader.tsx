import { ReactNode } from 'react';
import BackIcon from '@/shared/assets/icons/back-icon.svg?react';

const RewardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <header className="w-full h-20 flex items-center gap-2">
      <BackIcon className="cursor-pointer" />
      <p className="text-2xl">{children}</p>
    </header>
  );
};

export default RewardHeader;
