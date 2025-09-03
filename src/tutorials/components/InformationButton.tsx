import { useNavigate } from 'react-router';

interface Props {
  name: string;
  description: string;
  route: string;
  children?: React.ReactNode;
}

const InformationButton = ({ name, description, route, children }: Props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(route);
      }}
      className="group flex flex-col justify-between text-left hover:bg-[#7A00E6] bg-[#FFFFFF] rounded-[20px] h-44 px-3 py-3 hover:text-[#ffffff] transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <div className="">
        <p className="text-xl font-bold">{name}</p>
        {/* <p className="text-[#848484] group-hover:text-white">{description}</p> */}
      </div>
      <div className="place-self-center">{children}</div>
    </button>
  );
};

export default InformationButton;
