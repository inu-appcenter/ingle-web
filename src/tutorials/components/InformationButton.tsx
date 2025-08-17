import CylceIcon from '@/shared/assets/icons/cycle-icon.svg?react';
import { useNavigate } from 'react-router';

interface Props {
  name: string;
  description: string;
  route: string;
}

const InformationButton = ({ name, description, route }: Props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(route);
      }}
      className="group flex flex-col text-left hover:bg-[#7A00E6] bg-[#EDEDED] rounded-[20px] h-48 pl-2.5 pt-3 hover:text-[#ffffff] transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <div className="flex w-9 h-9 rounded-full group-hover:bg-[#7949FF] bg-[#DADADA] justify-center items-center mb-10">
        <CylceIcon />
      </div>
      <div className="pr-2.5">
        <p className="text-xl font-bold mb-1">{name}</p>
        <p className="text-[#848484] group-hover:text-white">{description}</p>
      </div>
    </button>
  );
};

export default InformationButton;
