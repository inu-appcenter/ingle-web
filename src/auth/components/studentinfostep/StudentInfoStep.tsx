/* 학생 정보 등록
    - 진행바
    - 제목
    - 내용(3단계:신분/학과/닉네임)
    - 다음 버튼
*/

import { useState } from 'react';
import DepartmentSelect from './DepartmentSelect';
import SetNickname from './SetNickname'; // Assuming this component exists for nickname input
import StatusSelect from './StatusSelect';

//단계 구분 변수 useStat

function StudentInfoStep() {
  const [infoStep, setInfoStep] = useState(0); // 0: 신분, 1: 학과, 2: 닉네임
  const [moveNext, setMoveNext] = useState(false);
  // 다음단계로 넘어갈 수 있는지 여부는 zustand에 각 단계별 속성이 채워졌는가에 따름.

  const stepTitles = [
    'Select your Current Status',
    'Select Your Department',
    'Enter Your student ID & Nickname',
  ];

  const renderContent = () => {
    switch (infoStep) {
      case 0:
        return <StatusSelect />;
      case 1:
        return <DepartmentSelect />;
      case 2:
        return <SetNickname />;
      default:
        return null;
    }
  };

  const readytoNext = () => {};

  return (
    <div className="flex flex-col items-center w-full h-full p-4">
      <h1>-----진행바-----</h1>
      <h1 className="text-4xl text-pretty pt-6 p-4">{stepTitles[infoStep]}</h1>
      {renderContent()}
      <button
        className="w-40 h-10 border border-color-gray rounded-3xl"
        onClick={() => setInfoStep(infoStep + 1)}
      >
        NEXT
        {/* studentType !== ''인 경우 next 버튼 활성화*/}
      </button>
    </div>
  );
}

export default StudentInfoStep;
