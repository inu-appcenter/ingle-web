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
      className={`flex w-full bg-[#7949FF] h-11 text-[#ffffff] justify-center items-center rounded-2xl ${className}`}
    >
      <p>{children}</p>
    </button>
  );
};

export default StampButton;
