// import MainImage from '@/shared/assets/images/place/hospital-image.png';
import CheckBox from '@/tutorials/check_box.svg?react';
import Down from '@/tutorials/chevron-left.svg?react';
import BubbleGuide from '@/tutorials/components/BubbleGuide';
import Button from '@/tutorials/components/Button';
import CategoryTag from '@/tutorials/components/CategoryTag';
import Header from '@/tutorials/components/Header';
import HomeCare from '@/tutorials/home_health.svg?react';
import Stethoscope from '@/tutorials/stethoscope.svg?react';

import { useState } from 'react';

export default function HospitalPage() {
  const tips =
    '"When visiting a hospital, be sure to bring your health insurance card (alien registration card) and passport. After your consultation, you will receive a prescription from the doctor, which you can take to a nearby pharmacy. You can find the list of government-designated medical institutions for official health check-ups in the attached file."';
  const facilities = [
    {
      title: 'Public Health Center',
      content:
        'Government-run public facilities offering services such as vaccinations, basic check-ups, and simple treatments at a low cost.',
    },
    {
      title: 'Clinics/Hospitals',
      content:
        'Specialized care in fields like internal medicine, ENT, and orthopedics. Suitable for mild illnesses and short-term hospitalization.',
    },
    {
      title: 'General Hospitals',
      content:
        'The largest facilities with multiple departments. They may be expensive and have longer wait times but are best for serious illnesses or emergencies.',
    },
    {
      title: 'Pharmacies',
      content:
        'Dispense prescription medicines and sell basic over-the-counter drugs such as digestive aids or pain relievers. Some simple medications are also available at convenience stores.',
    },
  ];
  const hospitals = [
    {
      type: 'Internal Medicine',
      name: [
        'Songdo First Internal Medicine',
        'Synergy Internal Medicine & Neurology Clinic',
        'Songdo Best Internal Medicine Clinic',
      ],
    },
    {
      type: 'Orthopedics',
      name: [
        'Beot Orthopedic Clinic',
        'Songdo Bon Orthopedic Clinic',
        'Songdo Sports Orthopedic Clinic',
      ],
    },
    {
      type: 'ENT(Ear, Nose & Throat)',
      name: ['Clear Plus ENT Clinic ', 'Beot ENT Clinic'],
    },
    {
      type: 'Ophthalmology',
      name: ['Yeonsu Kim Eye Clinic', 'Haneul Eye Clinic', 'MS Eye Clinic Songdo Branch'],
    },
    {
      type: 'Dentistry',
      name: [
        'Bareugego Dental Clinic',
        'Ribom Dental Clinic',
        'Eteok Plant Dental Clinic',
        'Elisha International Dental Clinic',
      ],
    },
  ];
  const [visibleList, setVisibleList] = useState<boolean[]>(
    Array(hospitals.length).fill(false),
  );
  const toggleVisible = (index: number) => {
    setVisibleList(prev => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <div className="flex flex-col w-full">
      <Header images={['/images/place/hospital-image.jpg']} />

      <main className="flex flex-col gap-5 mx-4 text-[#383737] leading-[140%]">
        <CategoryTag />
        <h1 className="text-[#383737] text-[32px] font-bold leading-none">Hospital</h1>

        <hr className="border-[#E8E5EF]" />

        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-black">
            If you’re sick, don’t endure it.
            <br />
            Go to the hospital!
          </h2>
          <h3>
            In Korea, many people believe it’s better to visit a hospital and get
            treatment quickly, even for minor symptoms. This means you can easily access
            medical services here. Don’t suffer alone!
            <br />
            <br />
            INGLE will guide you through the hospitals and medical facilities near Incheon
            National University and show you how to use them easily and quickly.
          </h3>
        </section>

        <hr className="border-[#E8E5EF]" />
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-black">
            Types of Medical Facilities in Korea
          </h2>
          <h3>
            Korean medical facilities can generally be divided into four categories. Visit
            the one that matches your symptoms:
          </h3>
          {facilities.map((item, index) => {
            return (
              <div className="flex flex-row">
                <div className="h-[23px] w-[23px] mr-2">
                  <CheckBox />
                </div>
                <p className="flex flex-col gap-5">
                  <span className="font-bold">{item.title}</span>
                  {item.content}
                </p>
              </div>
            );
          })}
        </section>

        <hr className="border-[#E8E5EF]" />

        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-black">Finding Hospitals near INU</h2>
          {/* 여기는 dropdown인지 확인해보고. */}
          {hospitals.map((item, index) => (
            <div key={index} className="mb-2">
              <div
                onClick={() => toggleVisible(index)}
                className="flex flex-row items-center justify-between h-[60px] bg-[#F4F2F6] px-4 py-[10px]"
              >
                <p className="text-bold text-sm">{item.type}</p>
                <div className="flex flex-row items-center">
                  <Stethoscope />
                  {visibleList[index] ? (
                    <Down className="ml-[10px] mr-3" />
                  ) : (
                    <Down className="ml-[10px] mr-3 rotate-180" />
                  )}
                </div>
              </div>
              {/*병원 리스트 */}
              <div className={`${visibleList[index] ? 'block' : 'hidden'}`}>
                <ul>
                  {item.name.map((hospital, idx) => (
                    <li
                      key={idx}
                      className={`flex flex-row items-center mt-5 pl-4 text-pretty`}
                    >
                      {hospital}
                      <HomeCare className="ml-2 flex-shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="flex flex-row justify-between h-16 rounded-[20px] bg-[#C3FCF2] px-4 py-5">
            <p>More Hospitals in Incheon</p>
            <a
              href="https://www.incheon.go.kr/en/EN050223"
              target="_blank"
              className="w-[57px] h-6 rounded-full bg-[#007663] text-white text-center underline"
            >
              view
            </a>
          </div>
        </section>
        <div className="h-12" />
        <BubbleGuide>{tips}</BubbleGuide>
        <div className="my-8 h-11">
          <Button tutorialNum={10}>Done Reading</Button>
        </div>
      </main>
    </div>
  );
}
