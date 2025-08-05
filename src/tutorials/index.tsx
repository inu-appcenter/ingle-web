import { useState } from 'react';
import { useNavigate } from 'react-router';

const TutorialPage = () => {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState();

  return (
    <div className="px-4 pt-2">
      {/* 헤더 : 마진 정확하게 조정해야함 */}
      <header className="w-full mb-8">
        <p className="text-2xl">INGLE</p>
        <p className="text-base text-[#838A8F]">Your INU Guide Book</p>
      </header>

      {/* 완료 게이지 바 : 마진 조정 예정, 글꼴 미세 조정, 폰트 설정 */}
      <div className="mb-8 bg-[#F5F5F5] rounded-[20px] px-[21px] h-[65px] flex items-center justify-between">
        <div>
          <p className="text-2xl">Welcome back</p>
          <p className="text-base text-[#838A8F]">
            Incheon National University
          </p>
        </div>
        <div>
          <p className="text-2xl text-[#7A00E6] font-bold">13/13</p>
        </div>
      </div>

      {/* 탭바 : 간격 정확하게 설정, */}
      <div className="flex justify-between mb-8">
        <div>
          <p className="text-[#7A00E6]">Campus Life</p>
        </div>
        <div>
          <p>Accademic Affairs</p>
        </div>
        <div>
          <p>Life Style</p>
        </div>
      </div>

      {/* 버튼 리스트 :  */}
      <div className="flex flex-row gap-8">
        <button className="bg-[#7A00E6] w-full rounded-[20px]">
          <img src="" alt="아이콘" />
          <p>Transit</p>
          <p>subway bus bike</p>
        </button>
        <button className="bg-[#7A00E6] w-full">
          <img src="" alt="아이콘" />
          <p className="text-[21px]">Transit</p>
          <p>subway bus bike</p>
        </button>
      </div>
    </div>
  );
};

export default TutorialPage;
