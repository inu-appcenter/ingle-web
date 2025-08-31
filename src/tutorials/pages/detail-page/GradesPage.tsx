import gradeImage1 from '@/shared/assets/images/place/grade-image1.jpg';
import ClockIcon from '@/shared/assets/icons/clock-icon.svg?react';
import PlaceIcon from '@/shared/assets/icons/place-icon.svg?react';
import CheckIcon from '@/shared/assets/icons/check-icon.svg?react';
import TagIcon from '@/shared/assets/icons/tag-icon.svg?react';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
import GiftIcon from '@/shared/assets/icons/gift-icon.png';
import SunGlassesIcon from '@/shared/assets/icons/sunGlasses-icon.png';
import Header from '@/tutorials/components/Header';
import Tag from '@/tutorials/components/Tag';
import Button from '@/tutorials/components/Button';

const GradesPage = () => {
  return (
    <>
      <Header images={[gradeImage1]} />
      <main className="px-4 flex flex-col gap-5">
        <Tag>Academics</Tag>
        <h1 className="text-[32px] font-bold">Grades</h1>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">
            Thump-thump... <br />
            What will my grade be?
          </h2>
          <p className="text-base text-[#313131]">
            INGLE will guide you through the simplest way to check your grades on the INU
            Portal.
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">How to Check Your Grades</h2>
          <p className="text-base text-[#313131]">
            Before you can view your grades, you must complete the Course Evaluation for
            all your classes.
          </p>
          <div className="flex">
            <p className="w-6 h-6 aspect-square flex rounded-full bg-[#7A00E6] text-white justify-center items-center font-bold mr-2">
              1
            </p>
            <div>
              <p>Log in to the Portal</p>
              <br />
              <p>
                Go to the Incheon National University portal site and click "Integrated
                Information".
              </p>
            </div>
          </div>
          <div className="flex">
            <p className="w-6 h-6 aspect-square flex rounded-full bg-[#7A00E6] text-white justify-center items-center font-bold mr-2">
              2
            </p>
            <div>
              <p>Complete Course Evaluations</p>
              <br />
              <p>
                Integrated Information System → Academic Affairs → Classes → Course
                Evaluation
              </p>
              <br />
              <p>Fill out the evaluation for every course you have taken.</p>
            </div>
          </div>
          <div className="flex">
            <p className="w-6 h-6 aspect-square flex rounded-full bg-[#7A00E6] text-white justify-center items-center font-bold mr-2">
              3
            </p>
            <div>
              <p>Check Your Grades</p>
              <br />
              <p>
                Once you have completed all course evaluations, you can view your grades.
              </p>
              <br />
              <p>
                Integrated Information System → Academic Affairs → Grades → Grade Inquiry
              </p>
              <br />
              <p>Click "View Grade before Applied" to see your results.</p>
            </div>
          </div>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Official Transcript</h2>
          <ul className="list-disc px-8 flex flex-col gap-4 text-base text-[#313131]">
            <li>
              Transcript Delivery: Official transcripts are sent to your home university
              via the International Office in July (Spring Semester) and January (Fall
              Semester).
            </li>
            <li>
              More Information: For detailed guidance on transcripts, visit the link
              below:
            </li>
          </ul>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        <div className="bg-[#FBE7E0] flex justify-between px-4 h-16 items-center text-base rounded-[20px]">
          <p className="text-base font-bold">Detailed Transcript Information</p>
          <div className="bg-[#FE8A7F] px-2 rounded-[20px] h-6">
            <p className="text-[#ffffff]">
              <a href="https://global.inu.ac.kr/global/6016/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGZ2xvYmFsJTJGMTQxMSUyRjM3OTM1MiUyRmFydGNsVmlldy5kbyUzRnBhZ2UlM0QxJTI2c3JjaENvbHVtbiUzRCUyNnNyY2hXcmQlM0QlMjZiYnNDbFNlcSUzRCUyNmJic09wZW5XcmRTZXElM0QlMjZyZ3NCZ25kZVN0ciUzRCUyNnJnc0VuZGRlU3RyJTNEJTI2aXNWaWV3TWluZSUzRGZhbHNlJTI2cGFzc3dvcmQlM0QlMjY%3D">
                view
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 bg-[#F4F2F6] rounded-md mt-8">
          <div className="flex flex-row items-center gap-4">
            <SmileIcon />
            <p>INGLE’s guide</p>
          </div>
          <div>
            <p className="text-[#6C757D]">
              "Grade checking is an essential part of your studies. Incheon National
              University offers a transparent and convenient system to make this process
              easy. If you have any questions, feel free to contact the International
              Office at any time."
            </p>
          </div>
        </div>

        <div className="my-8">
          <Button>Done Reading</Button>
        </div>
      </main>
    </>
  );
};

export default GradesPage;
