import CheckIcon from '@/shared/assets/icons/check-icon.svg?react';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
import SunGlassesIcon from '@/shared/assets/icons/sunGlasses-icon.png';
import { LazyImage } from '@/shared/components/LazyImage';
import { useImagePreload } from '@/shared/hooks/useImagePreload';
import Button from '@/tutorials/components/Button';
import Header from '@/tutorials/components/Header';
import Tag from '@/tutorials/components/Tag';

const LibraryPage = () => {
  // 중요한 이미지들을 미리 로드
  const criticalImages = [
    '/images/place/library-image1.jpeg',
    '/images/place/library-image2.jpg',
  ];

  useImagePreload(criticalImages, { priority: true });

  return (
    <article>
      {/* header : 이미지 + 뒤로가기 버튼 */}
      <Header images={criticalImages} />

      {/* 메인 : 제목 + 내용 */}
      <main className="px-4">
        <Tag>Campus Life</Tag>
        <h1 className="text-2xl font-bold mb-4">Haksan Library</h1>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Using INU Library Services</h2>
          <p className="text-base font-light">
            Haksan Library always strives to provide the best learning environment for
            students. Our library opens its reading rooms 24 hours a day, 365 days a year,
            so you can study whenever you want. There are also IRUM Hall where you can
            hold discussions and study together. INGLE will tell you more about the key
            facilities of Haksan Library!
          </p>
          <LazyImage
            src="/images/place/library-image4.png"
            alt="Library services information"
            className="w-full rounded-lg"
          />
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : Centeral Hall Floor Guide */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Centeral Hall Floor Guide</h2>

          <table className="w-full bg-white rounded-lg font-normal text-[14px] border">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6 w-20">
                  <span>4F</span>
                </td>
                <td className="p-4">
                  <div className="text-gray-800 mb-2">Resource Room 500-900</div>
                  <div className="text-gray-600">
                    : Applied Science, Arts, Language, Literature, History&Geography
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>3F</span>
                </td>
                <td className="p-4">
                  <div className="text-gray-800 mb-2">Resource Room 000-400</div>
                  <div className="text-gray-600 mb-2">
                    : Generalities, Philosophy & Psychology, Religion, Social Science,
                    Natural Science
                  </div>
                  <div className="text-gray-800">Study Room</div>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>2F</span>
                </td>
                <td className="p-4">
                  <div className="text-gray-800">
                    Periodicals Room, Job Library, Study Room, Study Garden
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>1F</span>
                </td>
                <td className="p-4">
                  <div className="text-gray-800">
                    Media Lounge, Multimedia LAB, Academic Information Team Office
                  </div>
                </td>
              </tr>

              <tr>
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>B1</span>
                </td>
                <td className="p-4">
                  <div className="text-gray-800">
                    Reading Room, Laptop Room, Seminar Room, Healing Zone, Repository,
                    Book Catalog Department, Copy&Bookbinding, Convenience Store
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl font-bold">IRUM Hall Floor Guide</h2>
          <table className="w-full bg-white rounded-lg border font-normal text-[12px]">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6 w-20">
                  <span>4F</span>
                </td>
                <td className="p-4">
                  Curation Zone, Personal Research Carrel, INU Honors Hall, Video
                  Conference Room, Meeting Room, Library Director’s Room
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>3F</span>
                </td>
                <td className="p-4">
                  Open Lounge, INU Great Books Center, Seminar Room, Study Room, Academic
                  Information Team Office
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>2F</span>
                </td>
                <td className="p-4">
                  Open Lounge•Focus Lounge, Study Garden, Private Study Carrel, Sky Rest
                  Area, Sea Rest Area, Irum Madang
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>1F</span>
                </td>
                <td className="p-4">
                  Triversity Convergence Hall, Live Studio, Video Production Room, Media
                  Room, Startup Zone, Startup Nest, Co-working Studio, Multiplex Zone
                </td>
              </tr>

              <tr>
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>B1</span>
                </td>
                <td className="p-4">
                  INU Play Zone, ICT Lounge, Maker Space, Irum Job Center
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Opening Hours</h2>
          <ul className="list-disc px-8">
            <li className="text-base">
              <p>B1 Reading Room: 24 hours </p>
              <p className="text-xs text-[#9681EB]">
                *closed only on New Year’s Day and Chuseok
              </p>
            </li>
            <li>
              <p>Others: </p>
              <p>Semester 09:00~21:00</p>
              <p>During exam period 09:00~22:00</p>
              <p>Vacation 09:00~17:00</p>
              <div className="mt-4">
                <p className="text-xs text-[#9681EB]">
                  *Sunday, National Holidays, INU Anniversary(March 12th)
                </p>
                <p className="text-xs text-[#9681EB]">
                  *open on Saturday during the semester, close on Saturday during vacation
                </p>
              </div>
            </li>
          </ul>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Check Out & Return</h2>
          <table className="w-full border border-[#B9B9B9] border-collapse font-sans text-gray-800">
            <thead className="bg-[#00AC84] text-white">
              <tr>
                <th className="px-4 py-2 text-left border border-[#B9B9B9]">User</th>
                <th className="px-4 py-2 text-left border border-[#B9B9B9]">
                  Loan Limit
                </th>
                <th className="px-4 py-2 text-left border border-[#B9B9B9]">
                  Period (days)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-[#B9B9B9]">Faculty</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">50</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">90</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-[#B9B9B9]">Undergraduate</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">7</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">20</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-[#B9B9B9]">Staff / T.A</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">20</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">20</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-[#B9B9B9]">Graduate Student</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">20</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">30</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-[#B9B9B9]">
                  Visiting Lecture / Foreign Lecture
                </td>
                <td className="px-4 py-2 border border-[#B9B9B9]">20</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">30</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-[#B9B9B9]">Stop-out Student</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">3</td>
                <td className="px-4 py-2 border border-[#B9B9B9]">20</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Reservation a seat</h2>
          <div className="text-base font-light px-4 py-2 bg-[#F4F2F6] ">
            <p>
              When studying in the library, you must reserve a seat using the mobile app
              or a machine inside the library. When you leave, please do not forget to
              ‘check out’ your seat for the next user.
            </p>
          </div>

          <div className="bg-[#F999E2] flex justify-between px-4 h-16 items-center text-base rounded-[20px]">
            <p>Haksan Library User Guide</p>
            <div className="bg-[#354B45] px-2 rounded-[20px]">
              <p className="text-[#ffffff]">
                <a href="https://lib.inu.ac.kr/en/library-guide/use/facility?tabIndex=5">
                  view
                </a>
              </p>
            </div>
          </div>

          {/* <div className="flex gap-2">
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
          </div> */}
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Mobile App Service</h2>
          <div className="flex items-center w-full gap-2">
            <CheckIcon />
            <h4 className="text-base font-bold ">Main functions</h4>
          </div>
          <ul className="list-disc px-8">
            <li>Access to the library (Membership card)</li>
            <li>Book search, check out, reservation</li>
            <li>Designation of a seat in a reading room</li>
            <li>Check library events and notifications</li>
          </ul>
          <div className="flex items-center w-full gap-2">
            <CheckIcon />
            <h4 className="text-base font-bold ">How to use</h4>
          </div>
          <p>Insall through the Play store or App store</p>
          <ul className="list-disc px-8">
            <li>ID: Student number</li>
            <li>PW: same as INU Portal site password</li>
            <li>Phone number: use it entered in INU Portal</li>
          </ul>
          <LazyImage
            src="/images/place/library-image3.png"
            alt="Library floor guide"
            className="w-full rounded-lg"
          />
          <div className="flex justify-between items-center h-12 bg-[#F4F2F6] px-4">
            <p>How to use an E-Book</p>
            <img src={SunGlassesIcon} className="w-10" />
          </div>
          <div className="flex justify-between items-center h-[86px] bg-[#F4F2F6] px-4">
            <p>
              Install kyobo ebook, BookRail, EPYRUS, Yes24 digital library Apps and select
              Haksan Library as the affiliated library
            </p>
          </div>

          <div className="bg-[#FED16A] flex justify-between px-4 h-16 items-center text-base rounded-[20px]">
            <p>Haksan Library User Guide</p>
            <div className="bg-[#386641] px-2 rounded-[20px]">
              <p className="text-[#ffffff]">
                <a href="https://lib.inu.ac.kr/en/">view</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-[#F4F2F6] rounded-md">
            <div className="flex flex-row items-center gap-4">
              <SmileIcon />
              <p>INGLE’s guide</p>
            </div>
            <div>
              <h4>Meaning of HaksanHaksan </h4>
              <p className="text-[#6C757D]">
                Seowon is the name of an institution established in 1702 to govern
                education and library resources in Incheon.
              </p>
            </div>
          </div>
        </section>
        <div className="mb-8">
          <Button tutorialNum={3}>Done Reading</Button>
        </div>
      </main>
    </article>
  );
};

export default LibraryPage;
