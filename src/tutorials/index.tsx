import { ROUTES } from '@/router/routes';
import InformationButton from '@/tutorials/components/InformationButton';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const campusLifeList = [
  {
    name: 'Transit',
    description: 'subway bus bike',
    route: ROUTES.TRANSIT,
    icon: <img src="/icons/tutorial1-icon.svg" alt="Transit" className="w-30 h-30" />,
  },
  {
    name: 'Dormitory',
    description: 'Application, Tips',
    route: ROUTES.DORMITORY,
    icon: <img src="/icons/tutorial2-icon.svg" alt="Dormitory" className="w-30 h-30" />,
  },
  {
    name: 'Clubs',
    description: '동아리 가입, 활동 정보 및 모집 공고',
    route: ROUTES.CLUBS,

    icon: <img src="/icons/tutorial3-icon.svg" alt="Library" className="w-30 h-30" />,
  },
  {
    name: 'Library',
    description: '도서관 이용안내, 열람실 및 자료 검색',
    route: ROUTES.LIBRARY,

    icon: <img src="/icons/tutorial4-icon.svg" alt="Festival" className="w-30 h-30" />,
  },
  {
    name: 'Festival',
    description: '학교 축제, 행사 일정 및 참여 방법',
    route: ROUTES.FESTIVAL,
    icon: <img src="/icons/tutorial5-icon.svg" alt="Clubs" className="w-30 h-30" />,
  },
];

const academicAffairsList = [
  {
    name: 'Tuition',
    description: '등록금 납부 방법 및 장학금 정보',
    route: ROUTES.TUITION,
    icon: <img src="/icons/tutorial6-icon.svg" alt="Tuition" className="w-30 h-30" />,
  },
  {
    name: 'Courses',
    description: '수강신청 일정, 방법 및 유의사항',
    route: ROUTES.COURSES,
    icon: <img src="/icons/tutorial7-icon.svg" alt="Courses" className="w-30 h-30" />,
  },
  {
    name: 'Curriculum',
    description: '교과과정 안내 및 졸업요건 정보',
    route: ROUTES.CURRICULUM,
    icon: <img src="/icons/tutorial8-icon.svg" alt="Curriculum" className="w-30 h-30" />,
  },
  {
    name: 'Grades',
    description: '성적 조회 및 성적증명서 발급',
    route: ROUTES.GRADES,
    icon: <img src="/icons/tutorial9-icon.svg" alt="Grades" className="w-30 h-30" />,
  },
];

const lifeStyleList = [
  {
    name: 'Hospital',
    description: '병원 이용안내 및 의료서비스 정보',
    route: ROUTES.HOSPITAL,
    icon: <img src="/icons/tutorial10-icon.svg" alt="Hospital" className="w-30 h-30" />,
  },
  {
    name: 'Insurance',
    description: '건강보험 가입 및 의료비 지원 제도',
    route: ROUTES.INSURANCE,
    icon: <img src="/icons/tutorial11-icon.svg" alt="Insurance" className="w-30 h-30" />,
  },
  {
    name: 'Jobs',
    description: '아르바이트 구인정보 및 취업 지원',
    route: ROUTES.JOBS,
    icon: <img src="/icons/tutorial12-icon.svg" alt="Jobs" className="w-30 h-30" />,
  },
  {
    name: 'K-culture',
    description: '한국 문화 이해 및 생활 적응 정보',
    route: ROUTES.K_CULTURE,
    icon: <img src="/icons/tutorial13-icon.svg" alt="K-culture" className="w-30 h-30" />,
  },
];

const TutorialPage = () => {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState<null | string>('CamLife');

  useEffect(() => {
    if (localStorage.getItem('tutorialTab')) {
      setTabs(localStorage.getItem('tutorialTab'));
    }
  }, []);

  return (
    <div
      className="flex flex-col pt-4 h-full bg-contain bg-top bg-no-repeat"
      style={{ backgroundImage: `url('/images/place/tutorial-image1.png')` }}
    >
      <div className="flex-1 flex flex-col px-4 w-full">
        {/* 탭바 : 간격 정확하게 설정, */}
        <div className="flex-none flex flex-row justify-between mb-8">
          <div
            onClick={() => {
              setTabs('CamLife');
              localStorage.setItem('tutorialTab', 'CamLife');
            }}
          >
            <p
              className={`${tabs === 'CamLife' ? 'text-[#7A00E6]' : 'text-[#838A8F]'} hover:text-[#7A00E6] cursor-pointer`}
            >
              Campus Life
            </p>
            {tabs === 'CamLife' && (
              <hr className="border-t-2 border-[#7A00E6] w-full"></hr>
            )}
          </div>
          <div
            onClick={() => {
              setTabs('Academic');
              localStorage.setItem('tutorialTab', 'Academic');
            }}
          >
            <p
              className={`${tabs === 'Academic' ? 'text-[#7A00E6]' : 'text-[#838A8F]'} hover:text-[#7A00E6] cursor-pointer`}
            >
              Academics
            </p>
            {tabs === 'Academic' && (
              <hr className="border-t-2 border-[#7A00E6] w-full"></hr>
            )}
          </div>
          <div
            onClick={() => {
              setTabs('LifeStyle');
              localStorage.setItem('tutorialTab', 'LifeStyle');
            }}
          >
            <p
              className={`${tabs === 'LifeStyle' ? 'text-[#7A00E6]' : 'text-[#838A8F]'} hover:text-[#7A00E6] cursor-pointer`}
            >
              Lifestyle
            </p>
            {tabs === 'LifeStyle' && (
              <hr className="border-t-2 border-[#7A00E6] w-full"></hr>
            )}
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
      <div className="h-[65vh] flex flex-col gap-[14px] bg-[#F4F2F6] w-full px-4 pt-4 rounded-t-[30px]">
        {/*카테고리 상단 설명 */}
        {tabs === 'CamLife' && (
          <div>
            <h1 className="font-extrabold text-xl">All about Campus</h1>
            <p className="text-[#9681EB] font-medium text-sm">
              Kick off your campus life with ease.
            </p>
          </div>
        )}
        {tabs === 'Academic' && (
          <div>
            <h1 className="font-extrabold text-xl">Smarter Academics</h1>
            <p className="text-[#9681EB] font-medium text-sm">
              All the academic stuff, minus the headache.
            </p>
          </div>
        )}
        {tabs === 'LifeStyle' && (
          <div>
            <h1 className="font-extrabold text-xl">Life in Korea INU</h1>
            <p className="text-[#9681EB] font-medium text-sm">
              Daily hacks for living in Korea..
            </p>
          </div>
        )}
        {/* 상세페이지 내용 */}
        <div className="w-full pb-4 grid grid-cols-2 gap-4 mx-auto overflow-y-auto scrollbar-hide">
          {tabs === 'CamLife' &&
            campusLifeList.map((data, index) => {
              return (
                <InformationButton
                  name={data.name}
                  description={data.description}
                  route={data.route}
                  key={index}
                >
                  {data.icon}
                </InformationButton>
              );
            })}
          {tabs === 'Academic' &&
            academicAffairsList.map((data, index) => {
              return (
                <InformationButton
                  name={data.name}
                  description={data.description}
                  route={data.route}
                  key={index}
                >
                  {data.icon}
                </InformationButton>
              );
            })}
          {tabs === 'LifeStyle' &&
            lifeStyleList.map((data, index) => {
              return (
                <InformationButton
                  name={data.name}
                  description={data.description}
                  route={data.route}
                  key={index}
                >
                  {data.icon}
                </InformationButton>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
