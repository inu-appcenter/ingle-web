import { ReactNode } from 'react';

interface ProfileButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ProfileButton = ({ children, className, onClick }: ProfileButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[#7A00E6] text-[#F4F2F6] text-xl font-bold rounded-2xl h-12  ${className}`}
    >
      <p className="m-auto">{children}</p>
    </button>
  );
};

export default ProfileButton;
