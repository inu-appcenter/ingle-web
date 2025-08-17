import { ReactNode } from 'react';

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex gap-2 items-center mb-5">
      <div className="bg-[#7949FF] text-[#ffffff] text-sm h-6 flex justify-center items-center rounded-lg">
        <p className="mx-2"># {children}</p>
      </div>
    </div>
  );
};

export default Tag;
