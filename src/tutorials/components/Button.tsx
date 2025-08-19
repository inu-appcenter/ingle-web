import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="flex w-full bg-[#7949FF] h-11 text-[#ffffff] justify-center items-center rounded-md">
      <p>{children}</p>
    </button>
  );
};

export default Button;
