import Header from '@/tutorials/components/Header';
import TutitionImage1 from '@/shared/assets/images/place/tuition-image1.jpg';
import TutitionImage2 from '@/shared/assets/images/place/tuition-image2.png';
import Tag from '@/tutorials/components/Tag';
import ClockIcon from '@/shared/assets/icons/clock-icon.svg?react';
import PlaceIcon from '@/shared/assets/icons/place-icon.svg?react';
import CheckIcon from '@/shared/assets/icons/check-icon.svg?react';
import TagIcon from '@/shared/assets/icons/tag-icon.svg?react';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
import SunGlassesIcon from '@/shared/assets/icons/sunGlasses-icon.png';
import Button from '@/tutorials/components/Button';

const TuitionPage = () => {
  return (
    <>
      <Header images={[TutitionImage1]} />
      <main className="px-4 flex flex-col gap-5">
        <Tag>Academics</Tag>
        <h1 className="text-[32px] font-bold">Tuition</h1>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">How to pay tuition fees at INU?</h2>
          <p className="text-base text-[#313131]">
            Are you wondering how to pay your tuition fees in a new country? INGLE has
            organized the tuition payment process, which may seem complicated, in a simple
            and easy-to-understand way.
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">When and how do I pay tuition fees?</h2>
          <p className="text-base text-[#313131]">
            Tuition fees must be paid every semester. The payment period begins around
            February and August, so please check the school's portal site or website for
            announcements.
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Tuition Fees for General Students</h2>
          <p className="text-base text-[#313131]"></p>
          <div className="flex w-full gap-2">
            <CheckIcon className="w-6 h-6" />
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-bold">
                Check the tuition bill on the portal site
              </h4>
              <h4 className="text-base font-bold">
                You can check the tuition bill on the Incheon National University portal
                site.
              </h4>
            </div>
          </div>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <p>
              INU Portal → Integrated Information System → Academic Affairs → Courses →
              Curriculum Inquiry → Course Inquiry
            </p>
          </div>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">
            Tuition Fees for Exchange and Visiting Students
          </h2>
          <p className="text-base text-[#313131]"></p>
          <ul className="list-disc px-8 text-base gap-5 flex flex-col">
            <li>
              Exchange Students
              <br />
              <br />
              Exchange students from partner universities will not be charged any tuition
              fees.
            </li>
            <li>
              Visiting Students
              <br />
              <br />
              Visiting students will be charged the same tuition fee as INU international
              students.
            </li>
          </ul>

          <div className="flex flex-col gap-4 p-4 bg-[#F4F2F6] rounded-md mt-8">
            <div className="flex flex-row items-center gap-4">
              <SmileIcon />
              <p>INGLE’s guide</p>
            </div>
            <div>
              <p className="text-[#6C757D]">
                "Exchange students do not have to worry about tuition fees as long as they
                are from a partner university. Visiting students, however, will need to
                pay the tuition fee. Please be sure to check your student status before
                coming to INU!"
              </p>
            </div>
          </div>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Required Documents for Application</h2>
          <p className="text-base text-[#313131]">
            Here is a list of documents required for your application. Please prepare them
            in advance to avoid any last-minute delays.
          </p>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <ul className="list-disc px-8 text-base flex flex-col">
              <li>
                Digital file of photo Passport sized (3.5cm x 4.5cm, Color, Visible ears)
              </li>
              <li>Copy of Passport (identity page)</li>
              <li>
                Certificate of Enrollment
                <br />
                <br />
                ⚠️ IMPORTANT:** For those NOT coming from OECD Member countries, the
                'Certificate of Enrollment' must have the confirmation of the Apostille
                Consulate of Korea in your country.
                <br />
                <br />
                Chinese students must submit a certificate of enrollment issued by CHSI.
                <br />
              </li>
              <li>Official Transcript</li>
              <li>
                Bank Balance Certificate
                <br />
                1 semester: $4,500 USD or above
                <br />
                2 semesters: $9,000 USD or above
                <br />
                <br />
              </li>
              <li>
                The certificate must be issued between 'May 1st~May 15th (FALL)' or
                'November 1st~November 15th (SPRING)'
              </li>
              <li>
                A certificate of Family Relations is needed if you have a bank statement
                in your parent’s name
              </li>
              <li>Certificate of Language Skills</li>
            </ul>
          </div>
          <img src={TutitionImage2} />
          <div className="bg-[#C3FCF2] flex justify-between px-4 h-16 items-center text-base rounded-[20px]">
            <p className="text-base font-bold">2025 Syllabus</p>
            <div className="bg-[#007663] px-2 rounded-[20px] h-6">
              <p className="text-[#ffffff]">
                <a href="https://global.inu.ac.kr/global/6016/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGZ2xvYmFsJTJGMTQxMSUyRjQxMDE1NyUyRmFydGNsVmlldy5kbyUzRnBhZ2UlM0QxJTI2c3JjaENvbHVtbiUzRCUyNnNyY2hXcmQlM0QlMjZiYnNDbFNlcSUzRCUyNmJic09wZW5XcmRTZXElM0QlMjZyZ3NCZ25kZVN0ciUzRCUyNnJnc0VuZGRlU3RyJTNEJTI2aXNWaWV3TWluZSUzRGZhbHNlJTI2cGFzc3dvcmQlM0QlMjY%3D">
                  view
                </a>
              </p>
            </div>
          </div>
          <div className="bg-[#FFC75F] flex justify-between px-4 h-16 items-center text-base rounded-[20px]">
            <p className="text-base font-bold">2025 Uni-festival archivie</p>
            <div className="bg-[#4F4537] px-2 rounded-[20px] h-6">
              <p className="text-[#ffffff]">
                <a href="https://www.inu.ac.kr/inu/1516/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGaW51JTJGMjQ2JTJGNDA5ODgyJTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDElMjZzcmNoQ29sdW1uJTNEJTI2c3JjaFdyZCUzRCUyNmJic0NsU2VxJTNEJTI2YmJzT3BlbldyZFNlcSUzRCUyNnJnc0JnbmRlU3RyJTNEJTI2cmdzRW5kZGVTdHIlM0QlMjZpc1ZpZXdNaW5lJTNEZmFsc2UlMjZwYXNzd29yZCUzRCUyNg%3D%3D">
                  view
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="my-8 h-11">
          <Button>Done Reading</Button>
        </div>
      </main>
    </>
  );
};

export default TuitionPage;
