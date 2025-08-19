import Image from '@/tutorials/bubble.svg?react';

interface Props {
  children: string;
}

export default function BubbleGuide({ children }: Props) {
  return (
    <div className="flex flex-col bg-[#F4F2F6] rounded-lg p-4">
      <div className="flex items-center w-[153px] h-[32px]">
        <Image />
        <div className="text-sm px-4">INGLE's guide</div>
      </div>
      <div className="py-3 text-base text-[#6C757D]">{children}</div>
    </div>
  );
}
