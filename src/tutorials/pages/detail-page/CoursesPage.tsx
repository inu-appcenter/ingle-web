import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
import courseImage1 from '@/shared/assets/images/place/course-image1.jpg';
import Button from '@/tutorials/components/Button';
import Header from '@/tutorials/components/Header';
import Tag from '@/tutorials/components/Tag';

const CoursesPage = () => {
  return (
    <>
      <Header images={[courseImage1]} />
      <main className="px-4 flex flex-col gap-5">
        <Tag>Academics</Tag>
        <h1 className="text-[32px] font-bold">Course Registration</h1>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">
            Course registration doesn’t have to be hard!
          </h2>
          <p className="text-base text-[#313131]">
            Whether you are an undergraduate, exchange student, or language program
            student, the courses you take will differ depending on your situation.
            <br />
            <br />
            INGLE will help make course registration—often considered complicated—easy and
            simple.
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">When and how do I register for courses?</h2>
          <p className="text-base text-[#313131]">
            You must register online within the designated period.
            <br />
            <br />
            If you miss it, you may not get into your desired classes.
            <br />
            <br />
            At our university, registration is on a first-come, first-served basis—fastest
            wins.
            <br />
            <br />
            For popular courses, some students even go to an internet café for faster
            connections.
            <br />
            <br />
            Course Registration Period: Usually one month before the semester starts,
            during the announced dates.
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Step-by-Step Course Registration Process</h2>
          <h2 className="text-xl font-bold">1. Search for Courses</h2>
          <p className="text-base text-[#313131]">
            First, find the courses you want to take. You can check the syllabus through
            the link below:
          </p>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <p>
              INU Portal → Integrated Information System → Academic Affairs → Courses →
              Curriculum Inquiry → Course Inquiry
            </p>
          </div>
          <h2 className="text-xl font-bold">2. Add to Course Basket</h2>
          <p className="text-base text-[#313131]">
            Before registration day, add your preferred courses to your "basket." This
            lets youregister faster when the system opens.
          </p>
          <h2 className="text-xl font-bold">3. Register for Courses</h2>
          <p className="text-base text-[#313131]">
            At your assigned time, log into the registration system and click the “Apply”
            button. The time depends on the last digit of your student ID, so check
            carefully.
          </p>
        </section>

        <div className="bg-[#C3FCF2] flex justify-between px-4 h-16 items-center text-base rounded-[20px]">
          <p className="text-base font-bold">2025 Syllabus</p>
          <div className="bg-[#007663] px-2 rounded-[20px] h-6">
            <p className="text-[#ffffff]">
              <a href="https://www.inu.ac.kr/inu/1516/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGaW51JTJGMjQ2JTJGNDA5ODgyJTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDElMjZzcmNoQ29sdW1uJTNEJTI2c3JjaFdyZCUzRCUyNmJic0NsU2VxJTNEJTI2YmJzT3BlbldyZFNlcSUzRCUyNnJnc0JnbmRlU3RyJTNEJTI2cmdzRW5kZGVTdHIlM0QlMjZpc1ZpZXdNaW5lJTNEZmFsc2UlMjZwYXNzd29yZCUzRCUyNg%3D%3D">
                view
              </a>
            </p>
          </div>
        </div>
        <div className="bg-[#FFC75F] flex justify-between px-4 h-16 items-center text-base rounded-[20px]">
          <p className="text-base font-bold">2025 Course Registration Guide</p>
          <div className="bg-[#4F4537] px-2 rounded-[20px] h-6">
            <p className="text-[#ffffff]">
              <a href="https://www.inu.ac.kr/inu/1516/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGaW51JTJGMjQ2JTJGNDA5ODgyJTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDElMjZzcmNoQ29sdW1uJTNEJTI2c3JjaFdyZCUzRCUyNmJic0NsU2VxJTNEJTI2YmJzT3BlbldyZFNlcSUzRCUyNnJnc0JnbmRlU3RyJTNEJTI2cmdzRW5kZGVTdHIlM0QlMjZpc1ZpZXdNaW5lJTNEZmFsc2UlMjZwYXNzd29yZCUzRCUyNg%3D%3D">
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
              "Course registration is one of the most important tasks for every student.
              If you have any questions, please contact the International Office. Since
              the system operates on a first-come, first-served basis, prepare backup
              plans in case you can’t get into your first-choice classes."
            </p>
          </div>
        </div>

        <div className="my-8">
          <Button tutorialNum={7}>Done Reading</Button>
        </div>
      </main>
    </>
  );
};

export default CoursesPage;
