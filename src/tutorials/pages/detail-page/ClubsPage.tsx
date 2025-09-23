import CheckIcon from '@/shared/assets/icons/check-icon.svg?react';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
import { LazyImage } from '@/shared/components/LazyImage';
import { useImagePreload } from '@/shared/hooks/useImagePreload';
import Button from '@/tutorials/components/Button';
import Header from '@/tutorials/components/Header';
import Tag from '@/tutorials/components/Tag';

const ClubsPage = () => {
  // 중요한 이미지들을 미리 로드
  const criticalImages = [
    '/images/place/club-image1.jpg',
    '/images/place/club-image2.jpg',
    '/images/place/club-image3.jpg',
  ];

  useImagePreload(criticalImages, { priority: true });

  return (
    <>
      <Header images={criticalImages} />
      <main className="px-4 flex flex-col gap-5">
        <Tag>Campus Life</Tag>
        <h1 className="text-[32px] font-bold">Student Club</h1>
        <hr className="border-t border-[#E8E5EF]" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Find Your Passion at INU Student Clubs!</h2>
          <p className="text-base text-[#313131]">
            At Incheon National University, students run a variety of self-organized
            clubs. These clubs offer a fantastic way to meet new people, explore your
            interests, and get the most out of your university life.
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Types of Clubs and How to Join</h2>
          <p className="text-base text-[#313131]">
            Clubs can be categorized into three main types.
          </p>
          <ul className="list-disc px-8">
            <li>
              Department Clubs: Clubs for students belonging to a specific department.
            </li>
            <li>College-level Clubs: Clubs for students of a specific college.</li>
            <li>
              Central Clubs: Clubs open to all students. For international students
              staying for one semester or one year, central clubs are often the most
              accessible and welcoming option.
            </li>
          </ul>
          <div className="flex items-center w-full gap-2">
            <CheckIcon />
            <h4 className="text-base font-bold">When to join</h4>
          </div>
          <p className="text-base text-[#313131]">
            Most clubs recruit new members at the start of the academic year in March.
            However, some also hold recruitment each semester or accept applications
            year-round, so feel free to contact the club you are interested in directly.
          </p>
          <div className="flex items-center w-full gap-2">
            <CheckIcon />
            <h4 className="text-base font-bold">How to join</h4>
          </div>
          <p className="text-base text-[#313131]">
            You can contact the club directly or ask the International Student Council for
            assistance. Some clubs may require an interview or audition, and a membership
            fee may be collected.
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Club Rooms Location</h2>
          <p className="text-base text-[#313131]">
            The central club rooms are located in Building 17. You can visit the building
            to learn more about each club in person.
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold"></h2>
          <p className="text-base text-[#313131]"></p>
          <table className="w-full">
            <thead className="text-white bg-[#00AC84]">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-lg">User</th>
                <th className="px-6 py-4 text-left font-semibold text-lg">Loan Limit</th>
                <th className="px-6 py-4 text-left font-semibold text-lg">
                  Period (days)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-900 [&>tr:nth-child(even)]:bg-gray-50 [&>tr]:hover:bg-gray-50 [&>tr]:transition-colors [&>tr]:border-b [&>tr]:border-gray-200 [&>tr>td]:px-6 [&>tr>td]:py-4 [&>tr>td:first-child]:font-medium">
              <tr>
                <td>Faculty</td>
                <td>50</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Undergraduate</td>
                <td>7</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Staff / T.A</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Graduate Student</td>
                <td>20</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Visiting Lecture / Foreign Lecture</td>
                <td>20</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Stop-out Student</td>
                <td>3</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
          <LazyImage
            src="/images/place/club-image4.png"
            alt="Student club activities"
            className="w-full rounded-lg"
          />
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <div className="bg-[#F999E2] flex justify-between px-4 h-16 items-center text-base rounded-[20px]">
            <p className="text-base font-bold">List of Central Clubs</p>
            <div className="bg-[#354B45] px-2 rounded-[20px] h-6">
              <p className="text-[#ffffff]">
                <a href="https://www.inu.ac.kr/inu/11707/subview.do">view</a>
              </p>
            </div>
          </div>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 p-4 bg-[#F4F2F6] rounded-md mt-8">
            <div className="flex flex-row items-center gap-4">
              <SmileIcon />
              <p>INGLE’s guide</p>
            </div>
            <div>
              <p className="text-[#6C757D]">
                "Joining a club is a great opportunity to make Korean friends and
                experience Korean culture. Don't hesitate to reach out to different clubs.
                It will make your university life much richer!"
              </p>
            </div>
          </div>
        </section>
        <div className="mb-8">
          <Button tutorialNum={4}>Done Reading</Button>
        </div>
      </main>
    </>
  );
};

export default ClubsPage;
