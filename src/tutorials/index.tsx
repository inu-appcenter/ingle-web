import InformationButton from '@/tutorials/components/InformationButton';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/router/routes';

const campusLifeList = [
  {
    name: 'Transit',
    description: 'subway bus bike',
    route: ROUTES.TRANSIT,
  },
  {
    name: 'Dormitory',
    description: 'Application, Tips',
    route: ROUTES.DORMITORY,
  },
  {
    name: 'Library',
    description: '도서관 이용안내, 열람실 및 자료 검색',
    route: ROUTES.LIBRARY,
  },
  {
    name: 'Festival',
    description: '학교 축제, 행사 일정 및 참여 방법',
    route: ROUTES.FESTIVAL,
  },
  {
    name: 'Clubs',
    description: '동아리 가입, 활동 정보 및 모집 공고',
    route: ROUTES.CLUBS,
  },
];

const academicAffairsList = [
  {
    name: 'Tuition',
    description: '등록금 납부 방법 및 장학금 정보',
    route: ROUTES.TUITION,
  },
  {
    name: 'Courses',
    description: '수강신청 일정, 방법 및 유의사항',
    route: ROUTES.COURSES,
  },
  {
    name: 'Curriculum',
    description: '교과과정 안내 및 졸업요건 정보',
    route: ROUTES.CURRICULUM,
  },
  {
    name: 'Grades',
    description: '성적 조회 및 성적증명서 발급',
    route: ROUTES.GRADES,
  },
];

const lifeStyleList = [
  {
    name: 'Hospital',
    description: '병원 이용안내 및 의료서비스 정보',
    route: ROUTES.HOSPITAL,
  },
  {
    name: 'Insurance',
    description: '건강보험 가입 및 의료비 지원 제도',
    route: ROUTES.INSURANCE,
  },
  {
    name: 'Jobs',
    description: '아르바이트 구인정보 및 취업 지원',
    route: ROUTES.JOBS,
  },
  {
    name: 'K-culture',
    description: '한국 문화 이해 및 생활 적응 정보',
    route: ROUTES.K_CULTURE,
  },
];

const TutorialPage = () => {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState(1);

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
        <div
          onClick={() => {
            setTabs(1);
          }}
        >
          <p
            className={`${tabs === 1 ? 'text-[#7A00E6]' : 'text-[#838A8F]'} hover:text-[#7A00E6] cursor-pointer`}
          >
            Campus Life
          </p>
        </div>
        <div
          onClick={() => {
            setTabs(2);
          }}
        >
          <p
            className={`${tabs === 2 ? 'text-[#7A00E6]' : 'text-[#838A8F]'} hover:text-[#7A00E6] cursor-pointer`}
          >
            Accademic Affairs
          </p>
        </div>
        <div
          onClick={() => {
            setTabs(3);
          }}
        >
          <p
            className={`${tabs === 3 ? 'text-[#7A00E6]' : 'text-[#838A8F]'} hover:text-[#7A00E6] cursor-pointer`}
          >
            Life Style
          </p>
        </div>
      </div>

      {/* 버튼 리스트 :  */}
      <div className="grid grid-cols-2 gap-4 mx-auto">
        {tabs === 1 &&
          campusLifeList.map((data, index) => {
            return (
              <InformationButton
                name={data.name}
                description={data.description}
                route={data.route}
                key={index}
              ></InformationButton>
            );
          })}
        {tabs === 2 &&
          academicAffairsList.map((data, index) => {
            return (
              <InformationButton
                name={data.name}
                description={data.description}
                route={data.route}
                key={index}
              ></InformationButton>
            );
          })}
        {tabs === 3 &&
          lifeStyleList.map((data, index) => {
            return (
              <InformationButton
                name={data.name}
                description={data.description}
                route={data.route}
                key={index}
              ></InformationButton>
            );
          })}
      </div>
    </div>
  );
};

export default TutorialPage;
