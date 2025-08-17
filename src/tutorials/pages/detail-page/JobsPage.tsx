import BubbleGuide from '@/tutorials/components/BubbleGuide';
import CategoryTag from '@/tutorials/components/CategoryTag';
import CountOne from '@/tutorials/counter_1.svg?react';
import CountTwo from '@/tutorials/counter_2.svg?react';
import CountThree from '@/tutorials/counter_3.svg?react';
import MainImage from '@/tutorials/job-bg.svg?react';

const JobsPage = () => {
  const overview = [
    {
      title: 'Eligibility',
      content: 'All international students registered at Incheon National University.',
    },
    {
      title: 'Payment',
      content: 'The insurance premium is paid automatically every month.',
    },
    {
      title: 'Benefits',
      content:
        'It provides financial support for hospital medical bills and prescription fees.',
    },
  ];
  const getJob = [
    {
      icon: <CountOne />,
      step: 'Prepare Required Documents',
      explain:
        'Prepare the necessary documents for the part-time work permit application(e.g. integrated application form, passport, Alien Registration Card, transcript, part-time work confirmation letter, etc.).',
    },
    {
      icon: <CountTwo />,
      step: 'Apply for Permission',
      explain:
        'Submit the prepared documents by visiting the Immigration Office or applying on the Hi Korea website to get permission.',
    },
    {
      icon: <CountThree />,
      step: 'Permit Issuance',
      explain:
        "Once your application is approved, the details of the permit will be written on the back of your 'Alien Registration Card'.",
    },
  ];
  const jobRegulation = [
    {
      title: 'Working Hours',
      content:
        'During the semester, you are limited to working 20 hours per week. There are no hour limits on public holidays and during vacation periods.',
    },
    {
      title: 'Eligibility',
      content:
        'First-year undergraduate students are limited to working 10 hours per week after receiving permission.',
    },
    {
      title: 'Warning',
      content:
        'Working at an unapproved workplace or exceeding the permitted hours is considered illegal. Be careful!',
    },
  ];

  const tips =
    '"If you are caught working without following the legal procedures, you may face penalties. Make sure to get permission and work safely within the approved scope. For more detailed information, please check the announcements from the INU International Office!"';

  return (
    <div className="flex flex-col w-full">
      <MainImage className="w-full h-auto" />
      <div className="flex flex-col gap-5 mx-4 my-5 text-[#383737] leading-[140%]">
        <CategoryTag />
        <h1 className="text-[#383737] text-[32px] font-bold leading-none">Job</h1>
        <h2 className="text-xl font-bold text-black">
          How to get a (part-time)job
          <br />
          in Korea?
        </h2>
        <h3>
          Would you like to gain diverse experiences by working a part-time job in Korea?
          According to current Korean law, international students must obtain permission
          before starting a job. INGLE is here to help you work safely and legally!
        </h3>

        <hr className="border-[#E8E5EF]" />

        <h2 className="text-xl font-bold text-black">
          Part-time Work Permit Application
          <br />
          Process
        </h2>
        <h3>
          International students (on a D-2 visa) must obtain a part-time work permit from
          the Immigration Office or through the Hi Korea website before they start
          working.
        </h3>

        <p className="text-red-500">여기서부터</p>
        {overview.map((item, index) => {
          return (
            <div className="bg-[#F4F2F6] rounded-lg py-[10px] px-4 text-sm text-[#484C52] leading-[160%]">
              <span className="font-bold">{item.title}</span>: {item.content}
            </div>
          );
        })}

        <hr className="border-[#E8E5EF]" />

        {/* 여기 insurance랑 똑같음 */}
        <h2 className="text-xl font-bold text-black">How to Get Your Health Insurance</h2>
        <h3>
          The process of enrolling in National Health Insurance is simple. The INU
          International Office can assist you with this.
        </h3>
        <p className="text-red-500">여기까지 insurance랑 똑같음</p>
        {getJob.map((item, index) => {
          return (
            <div className="flex flex-row text-base gap-2">
              <div className="w-6 h-6">{item.icon}</div>
              <div className="flex flex-col">
                <span className="font-bold pb-1">{item.step}</span>
                {item.explain}
              </div>
            </div>
          );
        })}

        <hr className="border-[#E8E5EF]" />

        <h2 className="text-xl font-bold text-black">
          Part-time Job Regulation
          <br />
          (Current Law)
        </h2>

        <ul className="text-base list-disc pl-6 maker::pl-2 space-y-4">
          {jobRegulation.map((item, index) => {
            return (
              <li key={index}>
                <span className="font-bold">{item.title}: </span>
                {item.content}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row justify-between h-16 rounded-[20px] bg-[#F9F871] px-4 py-5">
          <p>Part-time Permission</p>
          <a
            href="https://www.inu.ac.kr/isc_eng/10846/subview.do"
            target="_blank"
            className="w-[57px] h-6 rounded-full bg-[#006B5F] text-white text-center underline"
          >
            view
          </a>
        </div>

        <hr className="border-[#E8E5EF]" />

        <h2 className="text-xl font-bold text-black">Career-related Information</h2>
        <ul className="text-base list-disc pl-6 maker::pl-2 font-bold space-y-4">
          <li>
            <a
              href="https://eps.hrdkorea.or.kr/h2/main/main.do?"
              target="_black"
              className="underline"
            >
              Information on Foreign Employment
            </a>
          </li>
          <li>
            Foreign Workforce Counseling Center
            <span className="font-medium">: 1577-0071</span>
          </li>
          <li>
            <a
              href="https://eps.hrdkorea.or.kr/h2/main/main.do?"
              target="_black"
              className="underline"
            >
              Housing & Urban Guarantee Corporation (HUG)
              <span className="font-medium">: for housing-related information</span>
            </a>
          </li>
        </ul>

        <div className="h-12" />
        <BubbleGuide description={tips} />
      </div>
    </div>
  );
};

export default JobsPage;
