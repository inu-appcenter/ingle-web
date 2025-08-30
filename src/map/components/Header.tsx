import { SearchResult } from '@/map/types/Types';
import api from '@/shared/api/intercepter';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import BusP from '@/map/icons/bus-purple.svg?react';
import BusW from '@/map/icons/bus-white.svg?react';
import CafeP from '@/map/icons/cafe-purple.svg?react';
import CafeW from '@/map/icons/cafe-white.svg?react';
import CafeteriaP from '@/map/icons/cafeteria-purple.svg?react';
import CafeteriaW from '@/map/icons/cafeteria-white.svg?react';
import StoreP from '@/map/icons/conven-purple.svg?react';
import StoreW from '@/map/icons/conven-white.svg?react';
import Search from '@/map/icons/icnSearch.svg?react';
import SmokeP from '@/map/icons/smoke-purple.svg?react';
import SmokeW from '@/map/icons/smoke-white.svg?react';

export default function Header({
  setBuildingList,
}: {
  setBuildingList: React.Dispatch<React.SetStateAction<SearchResult[]>>;
}) {
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState<
    null | 'busStop' | 'cafeteria' | 'convenience' | 'cafe' | 'smokingBooth'
  >(null);

  const handleCategoryClick = (
    categoryName: 'busStop' | 'cafeteria' | 'convenience' | 'cafe' | 'smokingBooth',
  ) => {
    // 현재 선택된 카테고리와 클릭한 카테고리가 같으면 null로, 아니면 해당 카테고리로 설정합니다.
    setCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
  };

  const onSubmit = async (keyword: any) => {
    try {
      const res = await api.get(import.meta.env.VITE_MAP_SEARCHING_URL, {
        params: keyword,
      });
      console.log('response', res.data);
      setBuildingList(res.data);
    } catch (err) {
      console.log(err);
      alert('No related search terms found');
    }
  };

  return (
    <>
      {/* 핸들러 */}
      <div className="my-4 h-[5px] w-9 rounded-sm bg-[#BEBFC0]" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-4 flex flex-row gap-[6px] items-center w-full bg-[#EDEDED] h-9 p-[6px] rounded-[10px]"
      >
        <Search />
        <input
          {...register('keyword')}
          placeholder="Search Maps"
          className="focus:outline-none text-[#6C6C6C] text-[17px] bg-[#EDEDED]"
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
        <div className="flex flex-col gap-1" onClick={() => handleCategoryClick('cafe')}>
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
    </>
  );
}
