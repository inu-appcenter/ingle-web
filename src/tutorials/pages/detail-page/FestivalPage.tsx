import CheckIcon from '@/shared/assets/icons/check-icon.svg?react';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
// import festivalImage1 from '@/shared/assets/images/place/festival-image1.png';
// import festivalImage2 from '@/shared/assets/images/place/festival-image2.png';
import Button from '@/tutorials/components/Button';
import Header from '@/tutorials/components/Header';
import Tag from '@/tutorials/components/Tag';

const FestivalPage = () => {
  return (
    <>
      <Header
        images={[
          '/images/place/festival-image1.jpg',
          '/images/place/festival-image2.jpg',
          '/images/place/festival-image3.jpg',
        ]}
      />
      <main className="px-4 flex gap-5 flex-col">
        <Tag>Campus Life</Tag>
        <h1 className="text-[32px] font-bold">University Festival</h1>

        {/* 소제목 : OOOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">The Highlight of Your Campus Life!</h2>
          <p className="text-base font-light">
            Known as the "flower of university life" in Korea, festivals are a big deal!
            Incheon National University holds vibrant festivals every year. If you want to
            experience the passion and energy of the students, you absolutely can't miss
            them. INGLE will introduce you to INU's festival culture!
          </p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Two types of Festival</h2>
          <ul className="list-disc px-8 flex flex-col gap-4">
            <li className="text-base font-bold">Daedongje</li>
            <li>
              <p className="text-base font-bold">Autumn Festival</p>
              <p className="font-medium">
                Although smaller in scale than the Daedongje, this festival is perfect for
                enjoying the romantic atmosphere of autumn. Busking performances and
                various small-scale events create a cozier and more intimate vibe.
              </p>
            </li>
          </ul>
          <p className="text-base font-light"></p>
        </section>
        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOOO */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Main Attractions of Daedongje</h2>
          <p className="text-base font-light text-[#383737]">
            Daedongje is held for 3 days, usually around the second week of May, with
            various events taking place all over campus. Be sure to experience the diverse
            range of activities happening day and night!
          </p>
          <div className="flex items-center w-full gap-2">
            <CheckIcon />
            <h4 className="text-base font-bold">Stage Performances</h4>
          </div>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <p>
              The highlight of Daedongje is undoubtedly the spectacular stage
              performances. From the energetic dances and band performances by student
              clubs to concerts by famous singers invited every year! You might see famous
              artists like PSY, Gummy, and N.Flying, and students passionately enjoying
              the festival even in rain ponchos.
            </p>
          </div>
          <div className="flex items-center w-full gap-2">
            <CheckIcon />
            <h4 className="text-base font-bold">Diverse Booths</h4>
          </div>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <p>
              During the daytime, the Central Plaza is bustling with non-alcoholic booths,
              department-specific booths, and club booths. Here, you can play games with
              friends, try delicious food and drinks from various stalls, and participate
              in unique activities like a climbing wall or themed photo zones to create
              fun memories.
            </p>
          </div>
          <div className="flex items-center w-full gap-2">
            <CheckIcon />
            <h4 className="text-base font-bold">Festival Merchandise</h4>
          </div>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <p>
              Booths selling special festival goods are also available, so you can
              purchase a souvenir to remember the fun times!
            </p>
          </div>
          <div className="flex items-center w-full gap-2">
            <CheckIcon />
            <h4 className="text-base font-bold">Open Campus</h4>
          </div>
          <div className="text-base font-light px-4 py-4 bg-[#F4F2F6] text-[#484C52]">
            <p>
              Daedongje is open to everyone, not just Incheon National University
              students. Feel free to visit with your friends or family to experience the
              festive atmosphere together.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-[#F4F2F6] rounded-md mt-8">
            <div className="flex flex-row items-center gap-4">
              <SmileIcon />
              <p>INGLE’s guide</p>
            </div>
            <div>
              <h4>Meaning of HaksanHaksan </h4>
              <p className="text-[#6C757D]">
                “Daedongje is a very special opportunity to directly experience INU's
                culture and meet new people. Enjoy the concerts by famous singers and
                participate in the various activities at the booths to create
                unforgettable memories of your university life!"
              </p>
            </div>
          </div>
          <div className="bg-[#F2AE66] flex justify-between px-4 h-16 items-center text-base rounded-[20px]">
            <p className="text-base font-bold">2025 Uni-festival archivie</p>
            <div className="bg-[#C30E59] px-2 rounded-[20px] h-6">
              <p className="text-[#ffffff]">
                <a href="https://www.youtube.com/watch?v=TK7vpDZe1c8">view</a>
              </p>
            </div>
          </div>
        </section>
        <div className="mb-8">
          <Button tutorialNum={5}>Done Reading</Button>
        </div>
      </main>
    </>
  );
};

export default FestivalPage;
