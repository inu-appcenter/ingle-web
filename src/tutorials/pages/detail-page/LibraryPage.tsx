import libraryImage1 from '@/shared/assets/images/place/library-image1.jpeg';
import libraryImage2 from '@/shared/assets/images/place/library-image2.jpg';
import libraryImage3 from '@/shared/assets/images/place/library-image3.png';
import libraryImage4 from '@/shared/assets/images/place/library-image4.png';
import ClockIcon from '@/shared/assets/icons/clock-icon.svg?react';
import PlaceIcon from '@/shared/assets/icons/place-icon.svg?react';
import TagIcon from '@/shared/assets/icons/tag-icon.svg?react';
import Header from '@/tutorials/components/Header';
import Tag from '@/tutorials/components/Tag';

const LibraryPage = () => {
  return (
    <article>
      {/* header : 이미지 + 뒤로가기 버튼 */}
      <Header images={[libraryImage1, libraryImage2]} />

      {/* 메인 : 제목 + 내용 */}
      <main className="px-4">
        <Tag>Campus Life</Tag>
        <h1 className="text-2xl font-bold mb-4">Haksan Library</h1>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Using INU Library Services</h2>
          <p className="text-base font-light">
            Haksan Library always strives to provide the best learning
            environment for students. Our library opens its reading rooms 24
            hours a day, 365 days a year, so you can study whenever you want.
            There are also IRUM Hall where you can hold discussions and study
            together. INGLE will tell you more about the key facilities of
            Haksan Library!
          </p>
          <img src={libraryImage4} />
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
                  <div className="text-gray-800 mb-2">
                    Resource Room 500-900
                  </div>
                  <div className="text-gray-600">
                    : Applied Science, Arts, Language, Literature,
                    History&Geography
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>3F</span>
                </td>
                <td className="p-4">
                  <div className="text-gray-800 mb-2">
                    Resource Room 000-400
                  </div>
                  <div className="text-gray-600 mb-2">
                    : Generalities, Philosophy & Psychology, Religion, Social
                    Science, Natural Science
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
                    Media Lounge, Multimedia LAB, Academic Information Team
                    Office
                  </div>
                </td>
              </tr>

              <tr>
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>B1</span>
                </td>
                <td className="p-4">
                  <div className="text-gray-800">
                    Reading Room, Laptop Room, Seminar Room, Healing Zone,
                    Repository, Book Catalog Department, Copy&Bookbinding,
                    Convenience Store
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
                  Curation Zone, Personal Research Carrel, INU Honors Hall,
                  Video Conference Room, Meeting Room, Library Director’s Room
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>3F</span>
                </td>
                <td className="p-4">
                  Open Lounge, INU Great Books Center, Seminar Room, Study Room,
                  Academic Information Team Office
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>2F</span>
                </td>
                <td className="p-4">
                  Open Lounge•Focus Lounge, Study Garden, Private Study Carrel,
                  Sky Rest Area, Sea Rest Area, Irum Madang
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="bg-[#9681EB] text-white text-center py-6 px-6">
                  <span>1F</span>
                </td>
                <td className="p-4">
                  Triversity Convergence Hall, Live Studio, Video Production
                  Room, Media Room, Startup Zone, Startup Nest, Co-working
                  Studio, Multiplex Zone
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
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold"></h2>
          <p className="text-base font-light"></p>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold"></h2>
          <p className="text-base font-light"></p>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold"></h2>
          <p className="text-base font-light"></p>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />
      </main>
    </article>
  );
};

export default LibraryPage;
