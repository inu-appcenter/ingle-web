interface StampItemProps {
  name: string;
  image: string;
  status: boolean;
  onClick?: () => void;
}

const StampItem = ({ name, image, status, onClick }: StampItemProps) => {
  return (
    <div
      className="w-1/3 h-32 flex flex-col items-center justify-center mb-8 cursor-pointer group"
      onClick={onClick}
    >
      <div className="bg-[#ffffff] w-[104px] h-[104px] flex justify-center items-center rounded-full">
        <img src={image} alt={name} className="w-24 h-24 mb-2" />
      </div>
      <p className="text-center group-hover:text-[#7A00E6]">{name}</p>
    </div>
  );
};

export default StampItem;
