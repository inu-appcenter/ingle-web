interface StampItemProps {
  name: string;
  image: string;
  completed: boolean;
  onClick?: () => void;
}

const StampItem = ({ name, image, completed, onClick }: StampItemProps) => {
  return (
    <div
      className="w-1/3 h-32 flex flex-col items-center justify-center mb-8 cursor-pointer group"
      onClick={onClick}
    >
      <div className="bg-[#ffffff] w-[104px] h-[104px] flex justify-center items-center rounded-full overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className={`w-24 h-24 mb-2 transition duration-300 ${
            completed ? '' : 'blur-md'
          }`}
        />
        {!completed && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-[#C1C9D2] rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <span className="text-[#C1C9D2] text-2xl font-bold">?</span>
            </div>
          </div>
        )}
      </div>
      <p
        className={`text-center transition duration-300 ${
          completed ? 'group-hover:text-[#7A00E6]' : 'text-gray-400'
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default StampItem;
