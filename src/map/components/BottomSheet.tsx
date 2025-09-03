// import {useState} from 'react'
import useBottomSheet from '@/map/hooks/useBottomSheet';
import { useState } from 'react';

import BusP from '@/map/bus-purple.svg?react';
import BusW from '@/map/bus-white.svg?react';
import CafeP from '@/map/cafe-purple.svg?react';
import CafeW from '@/map/cafe-white.svg?react';
import CafeteriaP from '@/map/cafeteria-purple.svg?react';
import CafeteriaW from '@/map/cafeteria-white.svg?react';
import StoreP from '@/map/conven-purple.svg?react';
import StoreW from '@/map/conven-white.svg?react';
import Search from '@/map/icnSearch.svg?react';
import SmokeP from '@/map/smoke-purple.svg?react';
import SmokeW from '@/map/smoke-white.svg?react';

export default function BottomSheet() {
  const { sheet, content, handleUp, handleDown } = useBottomSheet();
  const [category, setCategory] = useState<
    null | 'busStop' | 'cafeteria' | 'convenience' | 'cafe' | 'smokingBooth'
  >(null);

  const handleCategoryClick = (
    categoryName: 'busStop' | 'cafeteria' | 'convenience' | 'cafe' | 'smokingBooth',
  ) => {
    // 현재 선택된 카테고리와 클릭한 카테고리가 같으면 null로, 아니면 해당 카테고리로 설정합니다.
    setCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
  };

  return (
    <div className="w-full ">
      {/* ▼ 시트 전체 */}
      <div
        ref={sheet}
        className="w-full fixed bottom-16 bg-[#F7F7F6] rounded-t-xl flex flex-col items-center px-4 pb-4"
      >
        <div className="my-4 h-[5px] w-9 rounded-sm bg-[#BEBFC0]" />

        {/* <Content /> */}

        <div ref={content} className="w-full">
          <header className="mb-4 flex flex-row gap-[6px] items-center w-full bg-[#EDEDED] h-9 p-[6px] rounded-[10px]">
            <Search /> <div className="text-[#6C6C6C]  text-[17px]">Search Maps</div>
          </header>

          <div className="w-full flex flex-row justify-between text-xs text-center">
            <div
              className="flex flex-col gap-1"
              onClick={() => handleCategoryClick('cafeteria')}
            >
              {category === 'cafeteria' ? <CafeteriaP /> : <CafeteriaW />}
              <div>Cafeteria</div>
            </div>
            <div
              className="flex flex-col gap-1"
              onClick={() => handleCategoryClick('cafe')}
            >
              {category === 'cafe' ? <CafeP /> : <CafeW />}
              <div>Cafe</div>
            </div>
            <div
              className="flex flex-col gap-1"
              onClick={() => handleCategoryClick('convenience')}
            >
              {category === 'convenience' ? <StoreP /> : <StoreW />}
              <div>24/7</div>
            </div>
            <div
              className="flex flex-col gap-1"
              onClick={() => handleCategoryClick('smokingBooth')}
            >
              {category === 'smokingBooth' ? <SmokeP /> : <SmokeW />}
              <div>
                Smoking
                <br />
                Area
              </div>
            </div>
            <div
              className="flex flex-col gap-1"
              onClick={() => handleCategoryClick('busStop')}
            >
              {category === 'busStop' ? <BusP /> : <BusW />}
              <div>
                Bus
                <br />
                Station
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
