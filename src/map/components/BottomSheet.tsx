import Header from '@/map/components/Header';
import useBottomSheet from '@/map/hooks/useBottomSheet';
import { SearchResult } from '@/map/types/Types';
import { useEffect, useState } from 'react';
import Contents from './Contents';

import Close from '@/map/icons/close.svg?react';

export default function BottomSheet({ modelRef }: { modelRef: React.RefObject<any> }) {
  const { sheet, content, handleUp, handleDown } = useBottomSheet();
  const [buildingList, setBuildingList] = useState<SearchResult[]>([]);
  const [showDetail, setShowDetail] = useState<number | null>(null);

  useEffect(() => {
    if (buildingList.length > 0) {
      handleUp();
    }
    if (buildingList.length === 0) {
    }
  }, [buildingList]);

  return (
    <div
      ref={sheet}
      className={`flex flex-col items-center absolute z-1 top-[calc(100%-200px)] h-[540px]
            px-4 pt-2 w-full  bg-[#F7F7F6] rounded-t-xl transition:transform duration-200 ease-out`}
    >
      {/* 핸들러 */}
      <div className="flex-none my-4 h-[5px] w-9 rounded-sm bg-[#BEBFC0]" />

      {/* 건물 상세 정보 */}
      {showDetail && (
        <div className="overflow-y-auto scrollbar-hide w-full">
          <Contents buildingList={buildingList} Id={showDetail}>
            <Close onClick={() => setShowDetail(null)} />
          </Contents>
        </div>
      )}

      {/* 바텀시트 기본 구성 */}
      {!showDetail && (
        <>
          <Header setBuildingList={setBuildingList} modelRef={modelRef} />

          <div ref={content} className="overflow-y-auto w-full">
            {/* 빌딩 리스트 */}
            {buildingList.map(building => (
              <div
                key={building.buildingId}
                className="p-2 border-b "
                onClick={() => {
                  setShowDetail(building.buildingId);
                  console.log('클릭', showDetail);
                }}
              >
                <div className="font-bold">{building.buildingName}</div>
                <div className="text-sm">{building.buildingCategory}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
