// import MainImage from '@/shared/assets/images/place/jops-image.png';
import BubbleGuide from '@/tutorials/components/BubbleGuide';
import Button from '@/tutorials/components/Button';
import CategoryTag from '@/tutorials/components/CategoryTag';
import Header from '@/tutorials/components/Header';

const JobsPage = () => {
  const overview = [
    {
      title: 'Prepare Required Documents',
      content:
        'Prepare the necessary documents for the part-time work permit application (e.g., integrated application form, passport, Alien Registration Card, transcript, part-time work confirmation letter, etc.).',
    },
    {
      title: 'Apply for Permission',
      content:
        'Submit the prepared documents by visiting the Immigration Office or applying on the Hi Korea website to get permission.',
    },
    {
      title: 'Permit Issuance',
      content: `Once your application is approved, the details of the permit will be written on the back of your 'Alien Registration Card'.`,
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
      <Header images={['/images/place/jops-image.png']} />
      <main className="flex flex-col gap-5 mx-4 text-[#383737] leading-[140%]">
        <CategoryTag />
        <h1 className="text-[#383737] text-[32px] font-bold leading-none">Job</h1>

        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-black">
            How to get a (part-time)job
            <br />
            in Korea?
          </h2>
          <h3>
            Would you like to gain diverse experiences by working a part-time job in
            Korea? According to current Korean law, international students must obtain
            permission before starting a job. INGLE is here to help you work safely and
            legally!
          </h3>
        </section>

        <hr className="border-[#E8E5EF]" />
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-black">
            Part-time Work Permit Application
            <br />
            Process
          </h2>
          <h3>
            International students (on a D-2 visa) must obtain a part-time work permit
            from the Immigration Office or through the Hi Korea website before they start
            working.
          </h3>
          {overview.map((item, index) => {
            return (
              <div className="bg-[#F4F2F6] rounded-lg py-[10px] px-4 text-sm text-[#484C52] leading-[160%]">
                <span className="font-bold">{item.title}</span>: {item.content}
              </div>
            );
          })}
        </section>

        <hr className="border-[#E8E5EF]" />
        <section className="flex flex-col gap-5">
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
        </section>

        <hr className="border-[#E8E5EF]" />

        <section className="flex flex-col gap-5">
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
        </section>

        <div className="h-12" />
        <BubbleGuide>{tips}</BubbleGuide>
        <div className="my-8 h-11">
          <Button tutorialNum={12}>Done Reading</Button>
        </div>
      </main>
    </div>
  );
};

export default JobsPage;
