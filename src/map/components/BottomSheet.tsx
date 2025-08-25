// import {useState} from 'react'
import useBottomSheet from '../hooks/useBottomSheet';

export default function BottomSheet() {
  const { sheet, content, handleUp, handleDown } = useBottomSheet();

  return (
    <div className="w-full">
      {/* ▼ 시트 전체 */}
      <div className="w-full fixed bottom-16 bg-[#F7F7F6] rounded-t-xl flex flex-col items-center px-4 pb-4">
        <header className="flex flex-col items-center w-full">
          <div className="my-2 h-[5px] w-9 rounded-sm bg-[#EDEDED]" />
          <div className="w-full bg-[#EDEDED] h-9 p-[6px] rounded-[10px]">🔍 검색바</div>
        </header>
      </div>
    </div>
  );
}
