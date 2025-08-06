import { ReactNode } from 'react';

const RewardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <header className="w-full h-20 flex items-center gap-2">
      <img src="" alt="뒤로가기" className="w-8 h-8" />
      <p className="text-2xl">{children}</p>
    </header>
  );
};

export default RewardHeader;
