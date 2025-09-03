import { BuildingDetails, SearchResult } from '@/map/types/Types';
import api from '@/shared/api/intercepter';
import { useEffect, useState } from 'react';

import Cursor from '@/map/icons/Cursor.svg?react';
import Export from '@/map/icons/export.svg?react';
import Drop from '@/map/icons/icnDrop.svg?react';
import Report from '@/map/icons/reportIssue.svg?react';

export default function Contents({
  buildingList,
  Id,
  children,
}: {
  buildingList: SearchResult[];
  Id: number | null;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState<BuildingDetails | null>(null);

  if (!buildingList || buildingList.length === 0) return null;
  //console.log('컴포넌트 안', buildingList);

  const checkTime = () => {
    // 현재 시간 가져와서 비교 => 오픈, 닫음
  };

  const moveToUrl = () => {
    if (!details?.buildingUrl) return;
    window.location.href = details.buildingUrl;
  };

  const showImages = () => {};

  const getDetails = async (Id: number | null) => {
    console.log('건물ID', Id);
    if (!Id) return;
    try {
      const res = await api.get(`${import.meta.env.VITE_MAP_BUILDIINGS}/${Id}`);
      setDetails(res.data);
      console.log(res.data);
    } catch {}
  };

  useEffect(() => {
    getDetails(Id);
  }, [Id]);

  return (
    <div className="pb-4">
      {/* 빌딩 상세 정보 */}

      <div className="flex flex-col gap-5 w-full bg-[#F7F7F6]">
        <header className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <h1 className=" text-pretty font-extrabold text-[28px] ">
              {details?.buildingName}
            </h1>
            <div className="w-[30px] h-[30px]">{children}</div>
          </div>
          <h3 className="text-[15px] ">한줄 부가 설명</h3>
        </header>

        <main className="flex flex-col gap-5">
          {/* [ ] 이미지 잘 모르겠음...*/}
          <section className="flex flex-row gap-4 mx-1">
            {details?.buildingImages.map(imgurl => (
              <img
                key={imgurl}
                src={`${import.meta.env.VITE_IMAGE}/${imgurl}`}
                alt="images"
              />
            ))}
          </section>

          <section className="flex flex-row justify-between items-center py-2 px-4 bg-[#FFFFFF] rounded-[10px]">
            <div>
              <h3 className="text-[#868782] text-[15px]">Hours</h3>
              <p>
                {details?.openTime}-{details?.closeTime}
              </p>
              <p className="font-semibold text-[#DF563F] text-[17px]">
                {isOpen ? 'Open' : 'Closed'}
              </p>
            </div>
            {/* 드롭다운 기능 추가 */}
            <Drop />
          </section>

          <section className="flex flex-col gap-[10px]">
            <div className="font-semibold text-xl">Details</div>
            <div className="bg-[#FFFFFF] rounded-[10px]">
              <div className="flex flex-col gap-1 px-4 py-3">
                <div className="text-[15px] text-[#868782] font-normal">INGLE's pick</div>
                <div className="text-[#7A00E6] text-sm font-medium">내용</div>

                <hr className="my-2 border-[#E8E5EF]" />

                <div className="text-[15px] text-[#868782] font-normal">Address</div>
                <div className="text-[#000000] text-sm font-normal">내용</div>
              </div>
            </div>
          </section>

          <section className="p-4 flex flex-row gap-3 bg-[#FFFFFF] rounded-[10px]">
            <Report />
            <div className="text-[#7A00E6] text-[17px] font-normal">Report an issue</div>
          </section>
        </main>

        <footer className="flex flex-row gap-2 justify-stretch w-full">
          <button
            disabled={!details?.buildingUrl}
            onClick={() => moveToUrl()}
            className={`flex-grow self-stretch flex flex-row items-center justify-center gap-1 h-12 text-[17px] text-[#F7F7F6] font-semibold ${details?.buildingUrl ? 'bg-[#7A00E6]' : 'bg-gray-300'} rounded-[10px] `}
          >
            <p>More Details</p>
            <Cursor />
          </button>
          <button className="h-12 w-12 bg-[#EBEBEB] rounded-[10px] py-[10px] px-3 place-content-center">
            <Export />
          </button>
        </footer>
      </div>
    </div>
  );
}
