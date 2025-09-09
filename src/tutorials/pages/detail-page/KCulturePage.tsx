import Button from '@/tutorials/components/Button';
import Header from '@/tutorials/components/Header';
import { useState } from 'react';

import KCultrueImage from '@/shared/assets/images/place/kculture-image.png';
import BubbleGuide from '@/tutorials/components/BubbleGuide';
import CategoryTag from '@/tutorials/components/CategoryTag';

import CheckBox from '@/tutorials/check_box.svg?react';
import Down from '@/tutorials/chevron-left.svg?react';
import Face from '@/tutorials/face.svg?react';
import NoSmoke from '@/tutorials/no-smoke.svg?react';
import SmokingBooth from '@/tutorials/smokingbooth.svg?react';

export default function KCulturePage() {
  const [visible, setVisible] = useState(false);
  const tips = `"Most Koreans only speak Korean. Although some are good at English or other foreign languages, it's a country where Korean is predominantly used. This can sometimes lead to misunderstandings in communication. If you ask a question and someone doesn't answer or gives a strange answer, it's highly likely they didn't understand you. When this happens, try asking again with some gestures. We’re actually quite nice, you’ll see!"`;
  const etiquette = [
    {
      title: 'Escalators',
      content:
        "The left side of the escalator is for those who want to walk up quickly, and the right side is for those who stand still. So, if you're carrying heavy luggage like a suitcase, you should stand on the right side.",
    },
    {
      title: 'Subway Seats',
      content:
        'The pink seats at both ends of the subway car are "임산부 배려석" (Im-san-bu bae-ryeo-seok), which means "seats for pregnant women." These seats should always be kept empty. If you are not pregnant, you should not sit there.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <Header images={[KCultrueImage]} />
      <div className="flex flex-col gap-5 mx-4 text-[#383737] leading-[140%]">
        <CategoryTag />
        <h1 className="text-[#383737] text-[32px] font-bold leading-none">K-Culture</h1>

        <hr className="border-[#E8E5EF]" />

        <h2 className="text-xl font-bold text-black">
          Think you only know K-POP?
          <br />
          INGLE's guide to real Korean
          <br />
          culture!
        </h2>
        <h3>
          So, you came to Korea only knowing about K-POP and K-DRAMAs? Well, Korea has a
          long history, which means it has a rich, diverse, and deep culture. There's so
          much to share—traditional foods, what's trending, characteristics of Koreans,
          weather and what to wear—but we can't fit it all here. So, we'll tell you just a
          few things about everyday culture that are good to know while you live at
          Incheon National University!
        </h3>

        <hr className="border-[#E8E5EF]" />

        <h2 className="text-xl font-bold text-black">
          "Have you eaten?" - A Korean Greeting
        </h2>
        <h3>
          You probably already know that Korean has formal and informal language. And you
          know that when you meet someone for the first time or an elder, you bow your
          head 30° and say "안녕하세요" (An-nyeong-ha-se-yo). When you greet a friend, you
          wave and say "안녕" (An-nyeong). But INGLE will tell you about something more
          common in daily life.
        </h3>
        <div
          onClick={() => setVisible(!visible)}
          className="flex flex-row items-center justify-between h-[60px] bg-[#F4F2F6] px-4 py-[10px]"
        >
          <p className="text-bold text-sm">
            Q. Why do Koreans always need to know if I have eaten?
          </p>
          <div className="flex flex-row items-center">
            <Face />
            <Down className={`ml-[10px] mr-3 ${!visible && 'rotate-180'}`} />
          </div>
        </div>
        <p className={`px-4 ${visible ? 'block' : 'hidden'}`}>
          A. You've probably wondered why Koreans ask "Have you eaten?" all the time,
          whether it's morning, noon, or night. Well, "밥 먹었어?"{' '}
          <span className="text-xs text-[#C1C9D2]">(Bab meo-geoss-eo?)</span> is a Korean
          way of asking "How are you?" or "Are you doing well?"
          <br />
          <br />
          Why rice, you ask?
          <br />
          There's a saying, "한국인은 밥심이다"{' '}
          <span className="text-xs text-[#C1C9D2]">(Hanguk-in-eun bab-sim-i-da)</span>,
          which means "Koreans live by the power of rice." This shows how much importance
          Koreans place on eating their meals. Another saying, "밥이 보약"{' '}
          <span className="text-xs text-[#C1C9D2]">(Bab-i bo-yak)</span>, means "rice is
          medicine," signifying that eating well is the first step to staying healthy. So,
          when anyone asks if you've eaten, it's their warm way of showing they care about
          your well-being.
          <br />
          <br />
          So, how should you answer? Just tell the truth! If you haven't eaten, say so. If
          you have, say so. Koreans aren't just asking what you ate; they'll get a sense
          of how you're doing from your expression and attitude when you answer. One more
          thing: if you say you haven't eaten yet, there's a high chance they will ask you
          to go eat with them!
        </p>

        <BubbleGuide>{tips}</BubbleGuide>

        <hr className="border-[#E8E5EF]" />

        <h2 className="text-xl font-bold text-black">Subway Etiquette</h2>
        <h3>
          You will be taking the subway often to explore the city around Incheon National
          University. Here are a few things that are good to know about the Korean subway.
        </h3>
        {etiquette.map((item, index) => {
          return (
            <div className="flex flex-row">
              <div className="h-[23px] w-[23px] mr-2">
                <CheckBox />
              </div>
              <p className="flex flex-col gap-5">
                <span className="font-bold">{item.title}</span>
                {item.content}
              </p>
            </div>
          );
        })}

        <hr className="border-[#E8E5EF]" />

        <h2 className="text-xl font-bold text-black">What to Keep in Mind at Uni</h2>
        <h3>
          Do you smoke?
          <br />
          If you are a smoker, you must remember this.
        </h3>
        <NoSmoke className="w-full" />
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Smoking Booths</span>: You must only smoke inside
            the designated 'smoking booths'. If you are caught smoking while walking or in
            a non-designated area, you can be reported. Please follow these rules,
            especially since campus supervision is strict.
          </li>
          <li>
            <span className="font-bold">Consideration for Non-smokers</span>: After
            smoking, it is good to brush your teeth or use a deodorizer before going
            indoors. Non-smokers really dislike the smell of cigarettes.
          </li>
        </ul>
        <SmokingBooth className="w-full" />

        <div className="flex flex-row justify-between h-21 font-medium rounded-[20px] bg-[#D9BE97] px-4 py-5">
          <p>
            More about our
            <br />
            Korean culture
          </p>
          <div className="flex flex-row items-center gap-[10px]">
            <a
              href="https://www.korea.net/AboutKorea"
              target="_blank"
              className="w-[57px] h-6 rounded-full bg-[#4D3A4D] text-white text-center underline"
            >
              view
            </a>
            <a
              href="https://www.culture.go.kr/english.do"
              target="_blank"
              className="w-[57px] h-6 rounded-full bg-[#922B07] text-white text-center underline"
            >
              view
            </a>
          </div>
        </div>

        <div className="my-8 h-11">
          <Button tutorialNum={13}>Done Reading</Button>
        </div>
      </div>
    </div>
  );
}
