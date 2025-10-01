import { BuildingDetails, SearchResult, Times } from '@/map/types/Types';
import api from '@/shared/api/intercepter';
import { useEffect, useState } from 'react';

import Cursor from '@/map/icons/cursor.svg?react';
import Export from '@/map/icons/export.svg?react';
import Drop from '@/map/icons/icnDrop.svg?react';
import Report from '@/map/icons/reportIssue.svg?react';

export default function Contents({
  buildingList,
  Id,
  children, //close 버튼 위한...
}: {
  buildingList: SearchResult[];
  Id: number | null;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<Boolean | null>(false);
  const [details, setDetails] = useState<BuildingDetails | null>(null);
  const [isDrop, setIsDrop] = useState(false);
  const Day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  if (!buildingList || buildingList.length === 0) return null;

  const operation = () => {
    const OpenDays = Day.filter(x => !details?.closedDays.includes(x));
    //console.log('open', OpenDays);
    return (
      <div>
        {OpenDays.map(index => (
          <div className="flex flex-row">
            <p className="w-10">{index.slice(0, 3)}</p> {details?.openTime} -{' '}
            {details?.closeTime}
          </div>
        ))}
      </div>
    );
  };
  const moveToUrl = () => {
    if (!details?.buildingUrl) return;
    window.location.href = details.buildingUrl;
  };

  const showImages = async (imageUrls: string[] | undefined) => {
    if (imageUrls === undefined) return;
    for (let i = 0; i < imageUrls.length; i++) {
      try {
        const res = await api.get(`/api/v1/images/${imageUrls[i]}`);
        console.log(res.data);
      } catch {
        console.log('이미지 실패');
      }
    }
  };

  useEffect(() => {
    const getDetails = async (Id: number | null) => {
      //console.log('건물ID', Id);
      if (!Id) return;
      try {
        const res = await api.get(`${import.meta.env.VITE_MAP_BUILDIINGS}/${Id}`);
        setDetails(res.data);
        console.log(res.data);
      } catch {}
    };
    getDetails(Id);
  }, [Id]);

  useEffect(() => {
    const checkTime = () => {
      // 현재 시간 가져와서 비교 => 오픈, 닫음
      const getTime = new Date();
      const Today: Times = {
        hour: getTime.getHours(),
        minute: getTime.getMinutes(),
      };
      if (!details?.openTime || !details.closeTime) {
        setIsOpen(null);
        return;
      }

      const openTime: Times = {
        hour: Number(details.openTime.split(':')[0]),
        minute: Number(details.openTime.split(':')[1]),
      };
      const closedTime: Times = {
        hour: Number(details.closeTime.split(':')[0]),
        minute: Number(details.closeTime.split(':')[1]),
      };

      //closedDay = string (Monday, Tuesday ...)
      //day = 0~6 (일~토)
      {
        details?.closedDays.map(closedDay => {
          if (closedDay === Day[getTime.getDay()]) {
            setIsOpen(false);
          } else if (Today.hour >= openTime.hour && Today.hour <= closedTime.hour) {
            if (
              (Today.hour === openTime.hour && Today.minute < openTime.minute) ||
              (Today.hour === closedTime.hour && Today.minute > closedTime.minute)
            ) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }
        });
      }
    };

    checkTime();
    const timer = setInterval(() => {
      checkTime();
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, [details]);

  return (
    <div className="pb-4">
      {/* 빌딩 상세 정보 */}

      <div className="flex flex-col gap-5 w-full bg-[#F7F7F6]">
        <header className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <h1 className="text-pretty font-extrabold text-[28px] ">
              {details?.buildingName}
            </h1>
            <div className="w-[30px] h-[30px]">{children}</div>
            {/* children은 닫기 버튼 */}
          </div>
        </header>

        <main className="flex flex-col gap-5">
          {/* [ ] 이미지 잘 모르겠음...*/}
          <section className="flex flex-row gap-4 mx-1 overflow-x-auto h-28">
            {details?.buildingImages.map((url, idx) => (
              <img
                key={idx}
                src={`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_IMAGE}/${url}`}
                alt={`image-${idx}`}
              />
            ))}
          </section>

          <section className="items-center py-2 px-4 bg-[#FFFFFF] rounded-[10px]">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h3 className="text-[#868782] text-[15px]">Hours</h3>
                <p className="text-[17px] font-semibold">
                  {details?.openTime}-{details?.closeTime}
                </p>
                <p className="font-semibold text-[#DF563F] text-[17px]">
                  {isOpen ? 'Open' : 'Closed'}
                </p>
              </div>
              <Drop onClick={() => setIsDrop(!isDrop)} />
            </div>
            {isDrop && operation()}
          </section>

          <section className="flex flex-col gap-[10px]">
            <div className="font-semibold text-xl">Details</div>
            <div className="bg-[#FFFFFF] rounded-[10px]">
              <div className="flex flex-col gap-1 px-4 py-3">
                <div className="text-[15px] text-[#868782] font-normal">INGLE's pick</div>
                <div className="text-[#7A00E6] text-sm font-medium">
                  {details?.inglePick}
                </div>

                <hr className="my-2 border-[#E8E5EF]" />

                <div className="text-[15px] text-[#868782] font-normal">Address</div>
                <div className="text-[#000000] text-sm font-normal">
                  {details?.address}
                </div>
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
