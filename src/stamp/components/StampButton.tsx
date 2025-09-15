import { ReactNode } from 'react';

const StampButton = ({
  children,
  onClick,
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex ${className} w-full bg-[#7949FF] h-11 justify-center items-center rounded-2xl `}
    >
      <p>{children}</p>
    </button>
  );
};

export default StampButton;
