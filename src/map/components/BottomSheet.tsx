// import {useState} from 'react'
import Header from '@/map/components/Header';
import useBottomSheet from '@/map/hooks/useBottomSheet';
import { SearchResult } from '@/map/types/Types';
import { useEffect, useState } from 'react';
import Contents from './Contents';

export default function BottomSheet() {
  const { sheet, content, handleUp, handleDown } = useBottomSheet();
  const [buildingList, setBuildingList] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (buildingList.length > 0) {
      handleUp();
    }
    if (buildingList.length === 0) {
    }
  }, [buildingList]);

  // handleSubmit(searchData =>
  //               setSearchData(JSON.stringify(searchData)),
  //             )

  return (
    <div
      ref={sheet}
      className={`flex flex-col items-center absolute z-1 top-[calc(100%-200px)] h-[550px]
            px-4 pb-4 pt-2 w-full  bg-[#F7F7F6] rounded-t-xl transition:transform duration-200 ease-out`}
    >
      <Header setBuildingList={setBuildingList} />
      <div ref={content} className="overflow-y-auto w-full">
        <Contents buildingList={buildingList} />
      </div>
    </div>
  );
}
