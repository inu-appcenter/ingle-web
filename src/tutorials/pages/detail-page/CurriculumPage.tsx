import CheckIcon from '@/shared/assets/icons/check-icon.svg?react';
import GiftIcon from '@/shared/assets/icons/gift-icon.png';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
// import curriculumImage1 from '@/shared/assets/images/place/curriculum-image1.jpg';
import Button from '@/tutorials/components/Button';
import Header from '@/tutorials/components/Header';
import Tag from '@/tutorials/components/Tag';

const CurriculumPage = () => {
  return (
    <>
      <Header images={['/images/place/curriculum-image1.jpg']} />
      <main className="px-4 flex flex-col gap-5">
        <Tag>Academics</Tag>
        <h1 className="text-[32px] font-bold">Curriculum</h1>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">INU Curriculum at a Glance</h2>
          <p className="text-base text-[#313131]">
            Not sure what to study at INU? INGLER has prepared a simple guide for
            international students covering credits, courses, and grade management.
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Credits & Grade Management</h2>
          <div className="flex w-full gap-2">
            <CheckIcon className="w-6 h-6" />
            <h4 className="text-base font-bold text-[#383737]">
              Maximum Credits
              <br />
              <br />
              Undergraduate students can take up to 18 credits per semester.
            </h4>
          </div>
          <div className="flex w-full gap-2">
            <CheckIcon className="w-6 h-6" />
            <h4 className="text-base font-bold text-[#383737]">
              Credit Calculation
              <br />
              <br />
              Most courses meet for 3 hours per week and are worth 3 credits.
            </h4>
          </div>
          <div className="flex w-full gap-2">
            <CheckIcon className="w-6 h-6" />
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold text-[#383737]">Transcripts</h4>
              <h4 className="text-base font-bold text-[#383737]">
                Issued at the end of each semester and sent to the home
                <br />
                university’s international office in July (Spring) and January (Fall)
              </h4>
            </div>
          </div>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Korean Language Classes</h2>
          <p className="text-base text-[#313131]">
            INU offers free Korean language classes for exchange students.
          </p>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <p>
              <strong>Eligibility</strong> : Available only to undergraduate exchange
              students and count toward graduation credits.
            </p>
          </div>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <p>
              <strong>Placement Test</strong> : Conducted before the semester starts;
              students are placed according to their test results.
            </p>
          </div>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <p>
              <strong>Registration</strong> : No separate registration is required during
              the regular course registration period.
            </p>
          </div>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">
            Special Courses for International Freshmen (IPA)
          </h2>
          <p className="text-base text-[#313131]">
            International freshmen with a TOPIK level below 4 must take the IPA (Intensive
            Program for Adjustment) Korean-related liberal arts courses.
          </p>
          <ul className="list-disc px-8 flex flex-col gap-4">
            <li>
              Automatic Enrollment: Based on the TOPIK score submitted at admission.
            </li>
            <li>
              Course Components: Korean Writing, Korean Presentation & Discussion,
              Understanding Korean Culture, Korean Life & Academics.
            </li>
          </ul>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <div className="flex items-center">
            <img src={GiftIcon} className="w-10 h-10" />
            <h2 className="text-xl font-bold">Other Useful Information</h2>
          </div>
          <ul className="list-disc px-8 flex flex-col gap-4 text-base text-[#313131]">
            <li>
              Inter-University Credit Exchange: Take courses at other universities and
              transfer up to 6 credits.
            </li>
            <li>
              Seasonal Semester: Earn extra credits during the summer or winter breaks.
            </li>
            <li>
              Course Syllabus: Since course offerings change every semester, check
              previous semester syllabi for reference.
            </li>
          </ul>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

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

        <div className="flex flex-col gap-4 p-4 bg-[#F4F2F6] rounded-md mt-8">
          <div className="flex flex-row items-center gap-4">
            <SmileIcon />
            <p>INGLE’s guide</p>
          </div>
          <div>
            <p className="text-[#6C757D]">
              "Planning your studies ahead is key to a successful exchange experience. INU
              offers a variety of classes and programs, so make the most of them. We
              recommend checking the International Office website regularly for the latest
              updates."
            </p>
          </div>
        </div>
        <div className="my-8">
          <Button tutorialNum={8}>Done Reading</Button>
        </div>
      </main>
    </>
  );
};

export default CurriculumPage;
