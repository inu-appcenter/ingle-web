import Header from '@/tutorials/components/Header';
import TutitionImage from '@/shared/assets/images/tuition-image.png';
import TutitionImage2 from '@/shared/assets/images/tuition-image2.png';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';

const TuitionPage = () => {
  return (
    <article>
      <Header image={TutitionImage} />
      <main className="w-full flex flex-col px-4 gap-4">
        <h1 className="text-2xl font-bold">Tuition Fees</h1>
        <section className="flex flex-col text-xs gap-4">
          <p>"How to pay fees at Incheon National University?"</p>
          <p>
            Are you wondering how to pay your tuition fees in a new country?
            INGLE has organized the tuition payment process, which may seem
            complicated, in a simple and easy-to-understand way.
          </p>
          <p>
            🤔 When and how do I pay tuition fees? Tuition fees must be paid
            every semester.
          </p>
          <p>
            The payment period begins around February and August, so please
            check the school's portal site or website for announcements.
          </p>
          <img src={TutitionImage2} className="w-full" />
        </section>
        <hr className="my-6 border-t-1 border-gray-300 w-full" />
        <section className="flex flex-col text-xs gap-4">
          <h4 className="font-semibold">Tuition Fees for General Students</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Check the tuition bill on the portal site</li>
            <li>
              You can check the tuition bill on the Incheon National University
              portal site.
            </li>
            <li>
              Link Suggestion:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Check Tuition Bill: [Link to INU Portal Site]</li>
              </ul>
            </li>
          </ul>

          <div className="flex bg-gray-100 p-2 rounded text-xs mt-2">
            •
            <p className="ml-2">
              INU Portal Site → Integrated Information System → Academic
              Administration → Payment → Notification & Certificates → Tuition
              fee
            </p>
          </div>
        </section>

        <hr className="my-6 border-t-1 border-gray-300 w-full" />

        <section className="flex flex-col text-xs gap-4">
          <h4>Tuition Fees for Exchange and Visiting Students</h4>
          <p>
            Exchange Students: Exchange students from partner universities will
            not be charged any tuition fees.
          </p>
          <p>
            Visiting Students: Visiting students will be charged the same
            tuition fee as INU international students.
          </p>

          <div className="bg-[#F4F2F6] h-[148px] p-4 gap-4 flex flex-col">
            <div className="flex items-center gap-4 ">
              <SmileIcon />
              <h4 className="text-base">INGLE's guide</h4>
            </div>
            <p>
              Exchange students do not have to worry about tuition fees as long
              as they are from a partner university. Visiting students, however,
              will need to pay the tuition fee. Please be sure to check your
              student status before coming to INU!
            </p>
          </div>
        </section>

        <hr className="my-6 border-t-1 border-gray-300 w-full" />

        <section className="flex flex-col text-xs gap-4">
          <h4></h4>
          <p></p>
        </section>

        <hr className="my-6 border-t-1 border-gray-300 w-full" />
        <section className="flex flex-col text-xs gap-4">
          <h4></h4>
          <p></p>
        </section>

        <hr className="my-6 border-t-1 border-gray-300 w-full" />
        <section className="flex flex-col text-xs gap-4">
          <h4></h4>
          <p></p>
        </section>
      </main>
    </article>
  );
};

export default TuitionPage;
