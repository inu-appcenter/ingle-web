import libraryImage from '@/shared/assets/images/library-image.png';
import ClockIcon from '@/shared/assets/icons/clock-icon.svg?react';
import Header from '@/tutorials/components/Header';

const LibraryPage = () => {
  return (
    <article>
      {/* header : 이미지 + 뒤로가기 버튼 */}
      <Header image={libraryImage} />

      {/* 메인 : 제목 + 내용 */}
      <main className="px-4">
        <h1 className="text-2xl font-bold mb-4">Haksan Library User Guide</h1>

        {/* 기본정보 : 운영시간 + 위치 + 태그 */}
        <section className="mb-7 flex flex-wrap gap-4">
          <div className="flex gap-2 items-center">
            <ClockIcon />
            <p>Weekdays : 9:00 AM - 9:00 PM</p>
          </div>
          <div className="flex gap-2 items-center">
            <ClockIcon />
            <p>Building 6</p>
          </div>
          <div className="flex gap-2 items-center">
            <ClockIcon />
            <p>Library, Study Room, Media Editor Room, Print Cafe</p>
          </div>
        </section>

        {/* 환영 메시지 */}
        <section className="text-[#6F6F6F] mb-8">
          <p>
            Welcome to the Haksan Library! The library is located next to the
            Main Building and across from the Student Union Building. It has
            four floors above ground and one basement level.
          </p>
        </section>

        {/* Opening Hours */}
        <section className="text-[#6F6F6F] mb-8">
          <h2 className="text-xl font-semibold mb-3 ">Opening Hours</h2>
          <div>
            <p className="font-medium mb-2">During Semester:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Weekdays: 9:00 AM – 9:00 PM</li>
              <li>Saturday: 9:00 AM – 1:00 PM</li>
            </ul>

            <p className="font-medium mb-2">During Vacation:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Weekdays: 9:00 AM – 6:00 PM</li>
              <li>Saturday: Closed</li>
            </ul>

            <p className="text-sm">
              Please note that hours may vary during exam periods or holidays.
              Check the official website for updates.
            </p>
          </div>
        </section>

        {/* Book Borrowing & Reading */}
        <section className="text-[#6F6F6F] mb-8">
          <h2 className="text-xl font-semibold mb-3 ">
            Book Borrowing & Reading
          </h2>

          <h3 className="font-medium mb-2">How to borrow:</h3>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li>Find your book on the shelf.</li>
            <li>
              Bring your student ID (physical or mobile) to the checkout desk.
            </li>
            <li>You can borrow up to 5 books for 14 days.</li>
            <li>Renewals are possible once via the website or kiosk.</li>
          </ol>

          <h3 className="font-medium mb-2">How to return:</h3>
          <p>
            Use the return box on the 1st floor or return directly to the desk.
          </p>
        </section>

        {/* Seat Reservation */}
        <section className="text-[#6F6F6F] mb-8">
          <h2 className="text-xl font-semibold mb-3">Seat Reservation</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Go to the library website or open the INGLE app.</li>
            <li>Click on "Seat Reservation."</li>
            <li>Select your preferred time and seat.</li>
            <li>Check in using the kiosk upon arrival.</li>
          </ol>
        </section>

        {/* Printing & Copying */}
        <section className="text-[#6F6F6F] mb-8">
          <h2 className="text-xl font-semibold mb-3">Printing & Copying</h2>
          <p className="mb-2">Available in the Copy Room on the 1st floor.</p>
          <p className="mb-2">You'll need to purchase a printer card.</p>
          <p>Black & white and color printing are available.</p>
        </section>

        {/* Study Support Facilities */}
        <section className="text-[#6F6F6F] mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Study Support Facilities
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Study Rooms: For small group discussions. Reservation required.
            </li>
            <li>
              Multimedia Room: For video viewing and digital resource access.
            </li>
            <li>
              Accessible Study Area: Special seating available for students with
              disabilities.
            </li>
          </ul>
        </section>

        {/* Help & Inquiries */}
        <section className="text-[#6F6F6F] mb-8">
          <h2 className="text-xl font-semibold mb-3">Help & Inquiries</h2>
          <p className="mb-2">
            Visit the information desk on the 1st floor or use the Q&A board on
            the website.
          </p>
          <p>Phone: +82 32-835-9570</p>
        </section>
      </main>
    </article>
  );
};

export default LibraryPage;
