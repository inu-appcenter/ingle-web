import Header from '@/tutorials/components/Header';
import TransitImage from '@/shared/assets/images/transit-image.png';

const TransitPage = () => {
  return (
    <article>
      <Header image={TransitImage} />
      <main className="px-4">
        <h1 className="text-2xl font-bold mb-4">Transit Getting Around INU</h1>

        {/* 헤더 정보 */}
        <section className="mb-7">
          <div className="rounded-lg mb-4">
            <h2 className="font-semibold text-lg mb-2">
              ✏️ Transit in 3 Lines
            </h2>
            <p className="text-gray-700 mb-2">
              Learn how to move between campus, the city, and the airport with
              shuttles, buses, subway, and more.
            </p>
            <p className="text-gray-700 mb-2">
              All you need is a transport card, the right app, and knowledge of
              key routes.
            </p>
            <p className="text-gray-700">
              INU's location in Songdo gives you easy access to Incheon, Seoul,
              and Incheon Airport.
            </p>
          </div>
        </section>

        {/* What is Transit */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            ❓ What is "Transit" at INU?
          </h2>
          <p className="text-gray-700 mb-4">
            Transit means all the transportation options you can use while
            studying at Incheon National University. From free campus shuttles
            to public buses, the subway, airport connections, bikes, and
            e-scooters—knowing your routes will save time and money. This is
            especially important for visiting the Immigration Office, community
            centers, and cultural spots during your stay.
          </p>
        </section>

        {/* How to Use Transportation */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            📌 How to Use INU Transportation
          </h2>

          {/* Campus Shuttle Bus */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 rounded">
              Campus Shuttle Bus
            </h3>

            <h4 className="font-medium mb-2">1. Check the Route:</h4>
            <ul className="list-disc list-inside mb-3 space-y-1 text-gray-700">
              <li>Songdo Campus ↔ College of Education</li>
              <li>Incheon Nat'l Univ. Station ↔ INU Campus</li>
              <li>Dorm Area ↔ INU Campus</li>
            </ul>

            <h4 className="font-medium mb-2">
              2. Find the Timetable: Available on ISC website or bus stop
              boards.
            </h4>

            <h4 className="font-medium mb-2">
              3. Board the Shuttle: Free of charge, just wait at the marked
              stop.
            </h4>

            <h4 className="font-medium mb-2">
              4. Tip: Arrive 5 minutes early—buses leave on time.
            </h4>
          </div>

          {/* City Bus */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 rounded">City Bus</h3>

            <h4 className="font-medium mb-2">
              1. Buy a Transport Card (T-money or Cashbee) at convenience
              stores.
            </h4>

            <h4 className="font-medium mb-2">2. Main Routes:</h4>
            <ul className="list-disc list-inside mb-3 space-y-1 text-gray-700">
              <li>INU Station ↔ INU: 8, 16, Circular 41, Circular 46</li>
              <li>Dorm Area ↔ INU: 6-1, Circular 46</li>
              <li>INU ↔ Immigration Office: 9, 16</li>
              <li className="font-medium mb-2">
                INU ↔ Community Centers:
                <ul className="list-disc list-inside mb-3 space-y-1 text-gray-700">
                  <li>Songdo 1-dong: 8, Circular 41, 6-1, 58, 16</li>
                  <li>Songdo 2-dong: 16, 6-1, 9</li>
                  <li>Songdo 3-dong: 16, 6, 58, 9</li>
                  <li>Songdo 4-dong: 58, Circular 46</li>
                </ul>
              </li>
            </ul>

            <p className="text-gray-700 mb-3">
              Board & Tap your card when getting on and off for transfer
              discounts.
            </p>

            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
              <p className="text-sm font-medium text-green-800">
                💡 Tip: Use Kakao Map or Naver Map for real-time arrivals.
              </p>
            </div>
          </div>

          {/* Subway */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 bg-purple-100 p-2 rounded">
              3️⃣ Subway
            </h3>

            <p className="text-gray-700 mb-3">
              <span className="font-medium">Nearest Station:</span> Incheon
              Nat'l Univ. Station (Line 1).
            </p>

            <h4 className="font-medium mb-2">Main Destinations:</h4>
            <ul className="list-disc list-inside mb-3 space-y-1 text-gray-700">
              <li>Incheon Bus Terminal, Bupyeong</li>
              <li>Seoul Station, Hongdae (via AREX)</li>
            </ul>

            <p className="text-gray-700 mb-3">
              Check Train Type: Express vs Local.
            </p>

            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
              <p className="text-sm font-medium text-green-800">
                💡 Tip: Avoid rush hours (07:30–09:00 / 18:00–19:30).
              </p>
            </div>
          </div>

          {/* Airport Transportation */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 bg-red-100 p-2 rounded">
              4️⃣ Airport Transportation
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <span className="font-medium">AREX (Airport Railroad):</span>{' '}
                Transfer at Gyeyang Station for Incheon Airport.
              </li>
              <li>
                <span className="font-medium">Airport Limousine Bus:</span>{' '}
                Check timetable on ISC notices.
              </li>
              <li>
                <span className="font-medium">Taxi:</span> Use Kakao T Blue
                (~35,000–40,000 KRW to the airport).
              </li>
            </ul>
          </div>

          {/* Bikes & E-scooters */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 bg-green-100 p-2 rounded">
              5️⃣ Bikes & E-scooters
            </h3>

            <p className="text-gray-700 mb-3">
              <span className="font-medium">Services:</span> Kakao T Bike,
              Gcooter, Swing.
            </p>

            <h4 className="font-medium mb-2">How to Ride:</h4>
            <p className="text-gray-700 mb-3">
              Download app → Register payment → Scan QR code → Ride.
            </p>

            <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
              <p className="text-sm font-medium text-yellow-800">
                ⚠️ Safety Tip: Wear a helmet, follow traffic rules, avoid
                sidewalks.
              </p>
            </div>
          </div>
        </section>

        {/* How You Can Use This */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            💡 How You Can Use This
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Daily commute:</span> Save money by
              combining shuttle + bus.
            </li>
            <li>
              <span className="font-medium">Quick trips:</span> E-scooter or
              bike for nearby cafes and shops.
            </li>
            <li>
              <span className="font-medium">Weekend trips:</span> Subway to
              Seoul for sightseeing.
            </li>
            <li>
              <span className="font-medium">Airport runs:</span> Choose between
              AREX and airport limousine bus based on luggage size.
            </li>
          </ul>
        </section>

        {/* Recommended Apps */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">📱 Recommended Apps</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                    App
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                    What it does
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                    Languages
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Kakao Map
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Real-time bus/subway info, navigation
                  </td>
                  <td className="border border-gray-300 px-4 py-2">KR, EN</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Naver Map
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Navigation, public transport info
                  </td>
                  <td className="border border-gray-300 px-4 py-2">KR, EN</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Kakao T
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Taxi, bike, driver service
                  </td>
                  <td className="border border-gray-300 px-4 py-2">KR, EN</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Subway Korea
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subway maps & timetables
                  </td>
                  <td className="border border-gray-300 px-4 py-2">KR, EN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </article>
  );
};

export default TransitPage;
