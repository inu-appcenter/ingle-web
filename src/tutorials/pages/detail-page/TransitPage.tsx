import CheckIcon from '@/shared/assets/icons/check-icon.svg?react';
import NervousIcon from '@/shared/assets/icons/nervous-icon.png';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
import TransitImage from '@/shared/assets/images/place/transit-image.jpg';
import Button from '@/tutorials/components/Button';
import Header from '@/tutorials/components/Header';
import Tag from '@/tutorials/components/Tag';

const TransitPage = () => {
  return (
    <>
      <Header images={[TransitImage]} />
      <main className="px-4">
        <Tag>Campus Life</Tag>
        <h1 className="text-[32px] font-bold mb-4">Transit</h1>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : Bus, Subway */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Bus, Subway, Taxi... All ways in Incheon!</h2>
          <p className="text-base font-light">
            INGLE will guide you through how to use public transportation around Incheon
            National University. Our campus is at the center of the city, making it easy
            to go anywhere — Incheon Airport, Seoul, and major cities across Korea.
          </p>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : Recommended Apps */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Recommended Apps</h2>
          <p className="text-base font-light">
            Public transportation in Korea is famous for being on time and convenient.Try
            installing these apps!
          </p>
          <table className="border border-[#B9B9B9] rounded-md w-full text-left text-xs">
            <thead>
              <tr className="bg-[#9681EB] text-white">
                <th className="px-4 py-2">App</th>
                <th className="px-4 py-2">What it does</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">
                  <p>Kakao Map</p>
                  <p>Naver Map</p>
                </td>
                <td className="px-4 py-2">Real-time bus & subway info, navigation</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">Kakao T</td>
                <td className="px-4 py-2">Taxi booking, bike rental</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">Subway Korea</td>
                <td className="px-4 py-2">Subway maps and timetables nationwide</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : OOO */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">
            <p>T-Money Card</p>
            <p>(Transportation Card)</p>
          </h2>
          <p className="text-base font-light">
            <ul className="list-disc list-inside">
              <li>
                Buy: Available at convenience stores (CU, GS25, 7-Eleven) or subway
                stations.
              </li>
              <li>
                Top-up: Same convenience stores, station staff, or recharge machines
                (cash/card).
              </li>
              <li>Use: Tap the card when boarding and getting off buses/subways.</li>
              <li>Pro tip: Can also be used to pay in taxis and convenience stores.</li>
            </ul>
          </p>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : How to Use Different Transport Modes */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">How to Use Different Transport Modes</h2>
          <div className="flex gap-2">
            <CheckIcon className="w-10" />
            <div className="flex flex-col gap-4">
              <p className="text-base">Bus</p>
              <ul className="text-base font-light list-disc list-inside flex flex-col gap-4">
                <li>
                  Find your stop: Use Kakao Map or Naver Map to check bus number and stop
                  location.
                </li>
                <li>Board: Enter through the front door and tap your T-Money card.</li>
                <li>
                  Get off: Press the stop button 1–2 stops in advance, then tap your card
                  when exiting through the back door.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#F4F2F6] w-full h-12 flex justify-between items-center px-4">
            <p>Why tap when getting off?</p>
            <img src={NervousIcon} className="w-10 h-10" />
          </div>
          <div className="bg-[#F4F2F6] w-full h-32 flex justify-between items-center px-4">
            <p>
              Because Korea calculates fares based on distance. If you don’t tap off,
              you’ll be charged to the final stop or pay extra next time. Plus, transfer
              discounts won’t apply without it.
            </p>
          </div>

          <div className="flex gap-2">
            <CheckIcon className="w-10" />
            <div className="flex flex-col gap-4">
              <p className="text-base">Subway</p>
              <ul className="text-base font-light list-disc list-inside flex flex-col gap-4">
                <li>
                  Check route: Use Subway Korea or Kakao Map to see the route and transfer
                  stations.
                </li>
                <li>Enter: Tap T-Money at the gate.</li>
                <li>
                  Transfer: Within 30 minutes, transfers between bus subway are discounted
                  or free.
                </li>
                <li>Exit: Tap your card at the gate when leaving.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2">
            <CheckIcon className="w-10" />
            <div className="flex flex-col gap-4">
              <p className="text-base">Taxi</p>
              <ul className="text-base font-light list-disc list-inside flex flex-col gap-4">
                <li>Book: Use Kakao T for real-time taxi booking.</li>
                <li>Pay: Cash, credit card, T-Money, or in-app payment.</li>
                <li>Note: Late-night surcharge (22:00–04:00) is 20–40%.</li>
                <li>Exit: Tap your card at the gate when leaving.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#E8E5EF] my-5" />

        {/* 소제목 : Bicycle Use */}
        <section className="mb-8 flex flex-col gap-5">
          <h2 className="text-xl font-bold">Bicycle Use</h2>
          <p className="text-base font-light">
            There are both bike-sharing services and public bike rentals near the
            university.
          </p>
          <div className="pl-4">
            <ul className="text-base font-light list-disc list-inside flex flex-col gap-4">
              <li>
                Bike-sharing apps
                <ul className="list-disc pl-10">
                  <li>sogar elecle</li>
                  <li>Kakao T</li>
                </ul>
              </li>
              <li>
                Public bike rental (G-Tower)
                <ul className="list-disc pl-10">
                  <li>Hours: Weekdays 09:00–17:00 (closed weekends & public holidays)</li>
                  <li>Requirierens: ID & proof of residence (1 bike per foreigner)</li>
                  <li>Contact: IFEZ Public Bike Info Desk(G-Tower 1F) ☎ 032-453-7887</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="bg-[#F4F2F6] p-4 flex gap-4 flex-col">
            <div className="flex items-center gap-4">
              <SmileIcon />
              <h4>INGLE’s guide</h4>
            </div>
            <p className="text-[#6C757D] font-medium">
              "Most Koreans only speak Korean. Although some are good at English or other
              foreign languages, it's a country where Korean is predominantly used. This
              can sometimes lead to misunderstandings in communication. If you ask a
              question and someone doesn't answer or gives a strange answer, it's highly
              likely they didn't understand you. When this happens, try asking again with
              some gestures. We’re actually quite nice, you’ll see!"
            </p>
          </div>
          <div className="bg-[#C3E4FF] flex justify-between px-4 py-5 rounded-[20px]">
            <p className="text-base">For more travel Tips</p>
            <div className="bg-[#71EBFF] px-3 rounded-[20px] text-[#ffffff]">
              <p>
                <a href="https://english.visitkorea.or.kr/svc/main/index.do?utm_source=ko_visitkorea&utm_medium=landing_url&utm_campaign=vk_main_enu">
                  view
                </a>
              </p>
            </div>
          </div>
          <div className="bg-[#F9F871] flex justify-between px-4 py-5 rounded-[20px]">
            <p className="text-base">Incheon Cycling Course</p>
            <div className="bg-[#70A9F0] px-3 rounded-[20px] text-[#ffffff]">
              <p>
                <a href="https://eng-itour.incheon.go.kr/cmn/board/BBSMSTR_000000000080/2874bbsDetail.do">
                  view
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="px-4 mb-8">
        <Button tutorialNum={1}>Done Reading</Button>
      </div>
    </>
  );
};

export default TransitPage;
