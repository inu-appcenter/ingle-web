import BackIcon from '@/shared/assets/icons/back-icon.svg?react';
import { useNavigate } from 'react-router';
import { MouseEvent } from 'react';

interface HeaderProps {
  image: string;
}

const Header = ({ image }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = (): void => {
    navigate(-1);
  };

  return (
    <header className="relative mb-8">
      <img
        src={image}
        className="w-full aspect-[5/4] object-cover object-center select-none pointer-events-none"
        alt="Haksan Library"
      />
      <div
        onClick={handleBackClick}
        className="absolute top-2 left-2 cursor-pointer"
        role="button"
      >
        <BackIcon />
      </div>
    </header>
  );
};

export default Header;
