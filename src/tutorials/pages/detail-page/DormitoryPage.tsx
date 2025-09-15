import CheckIcon from '@/shared/assets/icons/check-icon.svg?react';
import NervousIcon from '@/shared/assets/icons/nervous-icon.png';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
import { LazyImage } from '@/shared/components/LazyImage';
import { useImagePreload } from '@/shared/hooks/useImagePreload';
import Header from '@/tutorials/components/Header';

import Button from '@/tutorials/components/Button';
import Tag from '@/tutorials/components/Tag';

const DormitoryPage = () => {
  // 중요한 이미지들을 미리 로드
  const criticalImages = [
    '/images/place/dormitory-image1.jpg',
    '/images/place/dormitory-image2.png',
    '/images/place/dormitory-image3.jpg',
  ];

  useImagePreload(criticalImages, { priority: true });

  return (
    <>
      <Header images={criticalImages} />
      <main className="px-4">
        <Tag>Campus Life</Tag>
        <h1 className="text-[32px] font-bold mb-4">Dormitory</h1>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Dorm - Living on Campus</h2>
          <p className="text-base font-light">
            Dorm life isn’t as comfortable as living at home. In Korean universities,
            dormitories have curfews, strict gender separation, and no kitchens for safety
            reasons. However, even within these rules, you can share late-night
            conversations with friends, spend time together, and create unforgettable
            memories that will last a lifetime.
          </p>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : Dormitory Location */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Dormitory Location</h2>
          <LazyImage
            src="/images/place/dormitory-image1.jpg"
            alt="Dormitory location map"
            className="w-full rounded-lg"
          />
          <LazyImage
            src="/images/place/dormitory-image4.png"
            alt="Dormitory facilities"
            className="w-full rounded-lg"
          />
          <p className="text-base font-light"></p>
          <ul className="list-disc px-4">
            <li>Dormitory 1 & 2 & 3: Building no. 18</li>
            <li>Check-in Location: In front of Dormitory 2</li>
          </ul>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : Application Process */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Application Process</h2>
          <div className="w-full h-28 bg-[#F4F2F6] flex flex-col px-4 py-2.5">
            <h4 className="font-semibold text-sm mb-8">When to Apply</h4>
            <p className="text-sm font-light">Before each semester</p>
            <p className="text-sm font-light">
              <a href="https://global.inu.ac.kr/sites/global/index.do?epTicket=LOG">
                (check INUOIA website for dates).
              </a>
            </p>
          </div>
          <div className="w-full h-44 bg-[#F4F2F6] flex flex-col px-4 py-2.5">
            <h4 className="font-semibold text-sm mb-12">How to Apply</h4>
            <ul className="text-sm font-light px-4 list-disc">
              <li>Contact the relevant department or dormitory office.</li>
              <li>Fill out the online or paper application form.</li>
              <li>
                Submit required documents (passport, admission letter, ARC if available).
              </li>
            </ul>
          </div>

          <div className="w-full h-40 bg-[#F4F2F6] flex flex-col px-4 py-2.5">
            <h4 className="font-semibold text-sm mb-10">Roommate Application</h4>
            <ul className="text-sm font-light px-4 list-disc">
              <li>Apply for a roommate at the same time as the dormitory application.</li>
              <li>You can request to be assigned the same room.</li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Move-in Requirements</h2>
          <p className="text-base font-light"></p>
          <div className="flex gap-2">
            <CheckIcon className="w-10" />
            <div className="flex flex-col gap-4">
              <p className="text-base">Tuberculosis (TB) Test / X-ray Certificate</p>
              <ul className="text-base font-light list-disc list-inside flex flex-col gap-4">
                <li>Must be taken at an approved medical center before moving in.</li>
                <li>
                  <a href="https://www.google.com/maps/place/%EC%86%A1%EB%8F%84%EB%B3%B4%EA%B1%B4%EC%A7%80%EC%86%8C/@37.3770972,126.6358193,16z/data=!4m6!3m5!1s0x357b765342af4101:0x4509863bec0df8b4!8m2!3d37.3797317!4d126.6464617!16s%2Fg%2F11bytsmjm1?entry=tts&g_ep=EgoyMDI1MDgxMS4wIPu8ASoASAFQAw%3D%3D&skid=ef162002-d9c3-4b76-a6eb-3e1774728b6d">
                    Nearby Option: Songdo Public Health Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <CheckIcon className="w-10" />
            <div className="flex flex-col gap-4">
              <p className="text-base">Check-in Day</p>
              <ul className="text-base font-light list-disc list-inside flex flex-col gap-4">
                <li>Bring ID, TB test result, and printed acceptance confirmation.</li>
                <li>
                  <a href="https://www.google.com/maps/place/%EC%86%A1%EB%8F%84%EB%B3%B4%EA%B1%B4%EC%A7%80%EC%86%8C/@37.3770972,126.6358193,16z/data=!4m6!3m5!1s0x357b765342af4101:0x4509863bec0df8b4!8m2!3d37.3797317!4d126.6464617!16s%2Fg%2F11bytsmjm1?entry=tts&g_ep=EgoyMDI1MDgxMS4wIPu8ASoASAFQAw%3D%3D&skid=ef162002-d9c3-4b76-a6eb-3e1774728b6d">
                    Staff will give you a room key/card.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#F4F2F6] flex flex-row items-center justify-between px-4 h-12">
            <p>Why tap when getting off?</p>
            <img className="w-10 h-10" src={NervousIcon} />
          </div>
          <div className="bg-[#F4F2F6] px-4 h-32 flex justify-center items-center ">
            <p>
              Because Korea calculates fares based on distance. If you don’t tap off,
              you’ll be charged to the final stop or pay extra next time. Plus, transfer
              discounts won’t apply without it.
            </p>
          </div>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">What to Bring</h2>
          <LazyImage
            src="/images/place/dormitory-image5.png"
            alt="What to bring checklist"
            className="w-full rounded-lg"
          />
          <ul className="text-sm font-light px-4 list-disc">
            <li>Pillow and blanket (not provided)</li>
            <li>Personal toiletries</li>
            <li>Indoor slippers</li>
            <li>Personal electronic devices (laptop, chargers)</li>
            <li>Small drying rack (optional)</li>
          </ul>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Facilities</h2>
          <ul className="text-sm font-light px-4 list-disc">
            <li>Shared kitchen (varies by building)</li>
            <li>Laundry room (coin-operated or prepaid card)</li>
            <li>Study rooms</li>
            <li>Fitness rooms (check notice boards for opening hours)</li>
          </ul>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Rules & Tips</h2>
          <ul className="text-sm font-light px-4 list-disc">
            <li>No cooking inside rooms (only in designated kitchens)</li>
            <li>No alcohol inside dorm buildings</li>
            <li>Quiet hours: usually after 10 PM</li>
            <li>Visitors may be restricted – check dorm policy</li>
            <li>Report maintenance issues to the dormitory office</li>
          </ul>

          <div className="flex flex-col gap-4 p-4 bg-[#F4F2F6] rounded-md">
            <div className="flex flex-row items-center gap-4">
              <SmileIcon />
              <p>INGLE’s guide</p>
            </div>
            <p className="text-[#6C757D]">
              Dorm residents often order delivery food, so be sure to try some of Korea’s
              delicious delivery options!
            </p>
          </div>

          <div className="bg-[#D4BE5E] flex justify-between px-4 py-5 rounded-3xl h-16 text-base">
            <p>For more travel Tips</p>
            <div className="bg-[#BE5845] px-3 rounded-3xl text-[#ffffff]">
              <p>
                <a href="https://www.inu.ac.kr/dorm_eng/index.do?epTicket=LOG">view</a>
              </p>
            </div>
          </div>

          <div className="bg-[#F999E2] flex justify-between px-4 py-5 rounded-3xl h-16 text-base">
            <p>Incheon Cycling Course</p>
            <div className="bg-[#354B45] px-3 rounded-3xl text-[#ffffff]">
              <p>
                <a href="https://global.inu.ac.kr/global/6016/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGZ2xvYmFsJTJGMTQxMSUyRjQwODgzOCUyRmFydGNsVmlldy5kbyUzRnBhZ2UlM0QxJTI2c3JjaENvbHVtbiUzRCUyNnNyY2hXcmQlM0QlMjZiYnNDbFNlcSUzRCUyNmJic09wZW5XcmRTZXElM0QlMjZyZ3NCZ25kZVN0ciUzRCUyNnJnc0VuZGRlU3RyJTNEJTI2aXNWaWV3TWluZSUzRGZhbHNlJTI2cGFzc3dvcmQlM0QlMjY%3D">
                  view
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="mb-8">
          <Button tutorialNum={2}>Done Reading</Button>
        </div>
      </main>
    </>
  );
};

export default DormitoryPage;
