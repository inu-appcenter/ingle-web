import Close from '@/map/close.svg?react';

export default function Content() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <h1 className="font-extrabold text-[28px]">Name of Location</h1>
        <Close />
      </div>
      <h3 className="text-[15px]">한줄 부가 설명</h3>

      {/* 이미지 */}
      <div className="flex flex-row gap-4 my-5 mx-1">
        <div className="w-32 h-24 bg-gray-500" />
        <div className="w-32 h-24 bg-gray-500" />
      </div>
      <div>운영 시간 + 현재 상태(open/closed)</div>

      <div className="flex flex-col gap-[10px]">
        <div className="font-semibold text-xl">Details</div>
        <div className="bg-[#FFFFFF] rounded-[10px]">
          {/* 이런 게 여러개 */}
          <div className="flex flex-col gap-1 px-4 py-3">
            <div className="text-[15px] text-[#868782]">제목</div>
            <div className="text-[#7A00E6] text-sm">내용</div>
          </div>
        </div>
      </div>

      <button>관리자에게 신고</button>
      <button>더 많은 디테일 : 링크 연결</button>
    </div>
  );
}
