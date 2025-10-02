import { SearchResult } from '@/map/types/Types';
import api from '@/shared/api/intercepter';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRayStore } from '../stores/rayStore';

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

enum Category {
  BusStop = 'BUS_STOP',
  Cafeteria = 'RESTAURANT',
  Convenience = 'CONVENIENCE_STORE',
  Cafe = 'CAFE',
  SmokingBooth = 'SMOKING_BOOTH',
  SchoolBuilding = 'SCHOOL_BUILDING',
}

export default function Header({
  setBuildingList,
  modelRef,
}: {
  setBuildingList: React.Dispatch<React.SetStateAction<SearchResult[]>>;
  modelRef: React.RefObject<any>;
}) {
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState<Category | null>(null);
  const visibleBuildings = useRayStore(state => state.visibleBuildings);

  const handleCategoryClick = (categoryName: Category) => {
    // 현재 선택된 카테고리와 클릭한 카테고리가 같으면 null로, 아니면 해당 카테고리로 설정합니다.
    setCategory(prevCategory =>
      prevCategory === categoryName ? Category.SchoolBuilding : categoryName,
    );
  };

  useEffect(() => {
    console.log('Selected Category:', category);

    const fetchBuildings = async () => {
      try {
        //화면에 보이는 건물 레이캐스트
        modelRef.current?.castRays();

        const res = await api.get(import.meta.env.VITE_MAP_BUILDIINGS, {
          params: {
            maxLat: 38,
            maxLng: 127,
            minLat: 36,
            minLng: 126,
            buildingCategory: category,
          },
        });
        console.log('api 결과', category, res.data);

        //화면에 보이는 건물만 필터링
        if (category === Category.BusStop) {
          setBuildingList(res.data);
        } else {
          const filtered = res.data.filter((b: any) =>
            useRayStore.getState().visibleBuildings.includes(b.buildingId),
          );
          console.log('최종검색 결과 : ', filtered);

          setBuildingList(filtered); //카테고리의 모든 빌딩 데이터 리스트
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (category) {
      fetchBuildings();
    }
  }, [category]);

  const onSubmit = async (keyword: any) => {
    try {
      const res = await api.get(import.meta.env.VITE_MAP_SEARCHING_URL, {
        params: keyword,
      });
      //console.log('response', res.data);
      setBuildingList(res.data);
    } catch (err) {
      console.log(err);
      alert('No related search terms found');
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-4 flex flex-row gap-[6px] items-center w-full bg-[#EDEDED] h-9 p-[6px] rounded-[10px]"
      >
        <Search />
        <input
          {...register('keyword')}
          placeholder="Search Maps"
          className="focus:outline-none text-[#6C6C6C] text-[17px] bg-[#EDEDED] flex-1"
        />
        <input type="submit" />
      </form>

      {/* 카테고리 버튼 */}
      <div className="mb-2 w-full flex flex-row justify-between text-xs text-center">
        <div
          className="flex flex-col gap-1"
          onClick={() => {
            handleCategoryClick(Category.Cafeteria);
          }}
        >
          {category === Category.Cafeteria ? <CafeteriaP /> : <CafeteriaW />}
          <div>Cafeteria</div>
        </div>
        <div
          className="flex flex-col gap-1"
          onClick={() => handleCategoryClick(Category.Cafe)}
        >
          {category === Category.Cafe ? <CafeP /> : <CafeW />}
          <div>Cafe</div>
        </div>
        <div
          className="flex flex-col gap-1"
          onClick={() => handleCategoryClick(Category.Convenience)}
        >
          {category === Category.Convenience ? <StoreP /> : <StoreW />}
          <div>24/7</div>
        </div>
        <div
          className="flex flex-col gap-1"
          onClick={() => handleCategoryClick(Category.SmokingBooth)}
        >
          {category === Category.SmokingBooth ? <SmokeP /> : <SmokeW />}
          <div>
            Smoking
            <br />
            Area
          </div>
        </div>
        <div
          className="flex flex-col gap-1"
          onClick={() => handleCategoryClick(Category.BusStop)}
        >
          {category === Category.BusStop ? <BusP /> : <BusW />}
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
