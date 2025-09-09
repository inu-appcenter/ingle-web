import MainImage from '@/shared/assets/images/place/insurance-image.png';
import BubbleGuide from '@/tutorials/components/BubbleGuide';
import Button from '@/tutorials/components/Button';
import CategoryTag from '@/tutorials/components/CategoryTag';
import Header from '@/tutorials/components/Header';
import CountOne from '@/tutorials/counter_1.svg?react';
import CountTwo from '@/tutorials/counter_2.svg?react';
import CountThree from '@/tutorials/counter_3.svg?react';

const InsurancePage = () => {
  const tips =
    '"National Health Insurance is a vital system that makes your life in Korea safe and comfortable. If you have any more questions about insurance, please check the link below for more details or contact the International Office!"';
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
  const getInsurance = [
    {
      icon: <CountOne />,
      step: 'Alien Registration',
      explain:
        'Within 90 days of entering Korea, you must visit the Immigration Office to complete your Alien Registration.',
    },
    {
      icon: <CountTwo />,
      step: 'Automatic Enrollment',
      explain:
        'Once your Alien Registration is complete, you will be automatically enrolled in the National Health Insurance.',
    },
    {
      icon: <CountThree />,
      step: 'Pay Insurance Premium',
      explain: 'The insurance premium will be billed to you automatically every month.',
    },
  ];
  const important = [
    {
      title: 'Alien Registration',
      content:
        'You must complete your Alien Registration within 90 days of your entry into Korea.',
    },
    {
      title: 'Address Change',
      content:
        ' If your address changes, you must report it to the Immigration Office within 14 days.',
    },
    {
      title: 'Non-payment',
      content:
        'If you fail to pay your insurance premiums, you will not be able to receive health insurance benefits when visiting a hospital, so please be mindful of this!',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <Header images={[MainImage]} />

      <main className="flex flex-col gap-5 mx-4 text-[#383737] leading-[140%]">
        <CategoryTag />
        <h1 className="text-[#383737] text-[32px] font-bold leading-none">Insurance</h1>
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-black">
            What kind of insurance
            <br />
            do I need at INU?
          </h2>
          <h3>
            Health is the most important thing when you're living in a new country. INGLE
            is here to help you understand the mandatory insurance you need to have to
            live a worry-free life while studying at Incheon National University!
          </h3>
        </section>

        <hr className="border-[#E8E5EF]" />
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-black">
            Mandatory: National Health
            <br />
            Insurance
          </h2>
          <h3>
            All international students enrolled at Incheon National University are
            required to enroll in the National Health Insurance program. This is an
            essential system that helps reduce medical expenses when you use hospitals in
            Korea.
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
            How to Get Your Health Insurance
          </h2>
          <h3>
            The process of enrolling in National Health Insurance is simple. The INU
            International Office can assist you with this.
          </h3>
          {getInsurance.map((item, index) => {
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
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-black">Important Notes on Insurance</h2>
          <ul className="text-base list-disc pl-6 maker::pl-2">
            {important.map((item, index) => {
              return (
                <li key={index} className="mb-4">
                  <span className="font-bold">{item.title}: </span>
                  {item.content}
                </li>
              );
            })}
          </ul>
        </section>

        <div className="h-12" />
        <BubbleGuide>{tips}</BubbleGuide>
        <div className="my-8 h-11">
          <Button tutorialNum={11}>Done Reading</Button>
        </div>
      </main>
    </div>
  );
};

export default InsurancePage;
