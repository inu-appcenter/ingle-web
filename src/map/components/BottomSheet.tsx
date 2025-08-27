// import {useState} from 'react'
import useBottomSheet from '@/map/hooks/useBottomSheet';
import api from '@/shared/api/intercepter';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

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

// import Content from '@/map/components/Content';

export default function BottomSheet() {
  const { sheet, content, handleUp, handleDown } = useBottomSheet();
  const { register, handleSubmit } = useForm();
  const [searchData, setSearchData] = useState('');
  const [category, setCategory] = useState<
    null | 'busStop' | 'cafeteria' | 'convenience' | 'cafe' | 'smokingBooth'
  >(null);

  const handleCategoryClick = (
    categoryName: 'busStop' | 'cafeteria' | 'convenience' | 'cafe' | 'smokingBooth',
  ) => {
    // 현재 선택된 카테고리와 클릭한 카테고리가 같으면 null로, 아니면 해당 카테고리로 설정합니다.
    setCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
  };

  // handleSubmit(searchData =>
  //               setSearchData(JSON.stringify(searchData)),
  //             )
  const onSubmit = async (keyword: any) => {
    try {
      const res = await api.get(import.meta.env.VITE_MAP_SEARCHING_URL, {
        params: keyword,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full ">
      {/* ▼ 시트 전체 */}
      <div
        ref={sheet}
        className="px-4 pb-4 pt-2 w-full h-100vh bg-[#F7F7F6] rounded-t-xl flex flex-col items-center"
      >
        <div className="my-4 h-[5px] w-9 rounded-sm bg-[#BEBFC0]" />

        <div ref={content} className="w-full">
          {/* <Content /> */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-4 flex flex-row gap-[6px] items-center w-full bg-[#EDEDED] h-9 p-[6px] rounded-[10px]"
          >
            <Search />
            <input
              {...register('keyword')}
              placeholder="Search Maps"
              className="text-[#6C6C6C] text-[17px] bg-[#EDEDED]"
            />
            <input type="submit" />
          </form>

          {/* 카테고리 버튼 */}
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
