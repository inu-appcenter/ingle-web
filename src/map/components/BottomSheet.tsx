// import {useState} from 'react'
import Header from '@/map/components/Header';
import { BOTTOM_SHEET_HEIGHT } from '@/map/constants/BottomSheetOption';
import useBottomSheet from '@/map/hooks/useBottomSheet';
import { SearchResult } from '@/map/types/Types';
import { useState } from 'react';
import Buildings from './Buildings';

export default function BottomSheet() {
  const { sheet, content, handleUp, handleDown } = useBottomSheet();
  const [buildingList, setBuildingList] = useState<SearchResult[]>([]);

  // handleSubmit(searchData =>
  //               setSearchData(JSON.stringify(searchData)),
  //             )

  return (
    <div
      ref={sheet}
      className={`flex flex-col items-center absolute z-1 top-[calc(100%-205px)] h-[${BOTTOM_SHEET_HEIGHT}px]
            px-4 pb-4 pt-2 w-full  bg-[#F7F7F6] rounded-t-xl transition:transform duration-200 ease-out`}
    >
      <Header setBuildingList={setBuildingList} />
      <div ref={content} className="overflow-auto">
        <Buildings buildingList={buildingList} />
      </div>

      {/* 스크롤되는 바텀시트 내용 */}
      {/* <div className="w-full overflow-y-auto max-h-[70vh]">

        
      </div> */}
    </div>
  );
}
