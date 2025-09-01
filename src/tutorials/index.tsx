import { ROUTES } from '@/router/routes';
import InformationButton from '@/tutorials/components/InformationButton';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import TutorialImage from '@/shared/assets/images/place/tutorial-image1.png';

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
    <div
      className="flex flex-col pt-4 h-full bg-contain bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${TutorialImage})` }}
    >
      <div className="flex-1 flex flex-col px-4 w-full">
        {/* 탭바 : 간격 정확하게 설정, */}
        <div className="flex-none flex flex-row justify-between mb-8">
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
            {tabs === 1 && <hr className="border-t-2 border-[#7A00E6] w-full"></hr>}
          </div>
          <div
            onClick={() => {
              setTabs(2);
            }}
          >
            <p
              className={`${tabs === 2 ? 'text-[#7A00E6]' : 'text-[#838A8F]'} hover:text-[#7A00E6] cursor-pointer`}
            >
              Academics
            </p>
            {tabs === 2 && <hr className="border-t-2 border-[#7A00E6] w-full"></hr>}
          </div>
          <div
            onClick={() => {
              setTabs(3);
            }}
          >
            <p
              className={`${tabs === 3 ? 'text-[#7A00E6]' : 'text-[#838A8F]'} hover:text-[#7A00E6] cursor-pointer`}
            >
              Lifestyle
            </p>
            {tabs === 3 && <hr className="border-t-2 border-[#7A00E6] w-full"></hr>}
          </div>
        </div>

        {/* 헤더 : 마진 정확하게 조정해야함 */}
        <header className="w-full mb-8 flex-1 flex flex-col justify-center ">
          <p
            className="text-4xl font-extrabold text-white "
            style={{ textShadow: '0 4px 4px rgba(0,0,0,0.25)' }}
          >
            INGLE
          </p>
          <p
            className="text-2xl font-extrabold text-white"
            style={{ textShadow: '0 4px 4px rgba(0,0,0,0.25)' }}
          >
            Your INU Guide Book
          </p>
        </header>
      </div>

      {/* 카테고리 */}
      <div className="h-[55vh]  flex flex-col gap-[14px] bg-[#F4F2F6] w-full px-4 pt-6 pb-4 rounded-t-[30px]">
        {/* 버튼 리스트 :  */}
        {tabs === 1 && (
          <div>
            <h1 className="font-extrabold text-xl">All about Campus</h1>
            <p className="text-[#9681EB] font-medium text-sm">
              Kick off your campus life with ease.
            </p>
          </div>
        )}
        {tabs === 2 && (
          <div>
            <h1 className="font-extrabold text-xl">Smarter Academics</h1>
            <p className="text-[#9681EB] font-medium text-sm">
              All the academic stuff, minus the headache.
            </p>
          </div>
        )}
        {tabs === 3 && (
          <div>
            <h1 className="font-extrabold text-xl">Life in Korea INU</h1>
            <p className="text-[#9681EB] font-medium text-sm">
              Daily hacks for living in Korea..
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mx-auto overflow-y-auto ">
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
    </div>
  );
};

export default TutorialPage;
