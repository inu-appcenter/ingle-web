const StampItem = ({ item, index }: any) => {
  return (
    <div
      key={index}
      className="w-1/3 h-28 flex flex-col items-center justify-center mb-8"
    >
      <img src="" alt="스탬프" className="w-16 h-16 mb-2" />
      <p className="text-center">{item.name}</p>
    </div>
  );
};

export default StampItem;
