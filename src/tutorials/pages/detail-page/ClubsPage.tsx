import clubImage1 from '@/shared/assets/images/place/club-image1.png';
import clubImage2 from '@/shared/assets/images/place/club-image2.png';
import clubImage3 from '@/shared/assets/images/place/club-image3.png';
import clubImage4 from '@/shared/assets/images/place/club-image4.png';
import ClockIcon from '@/shared/assets/icons/clock-icon.svg?react';
import PlaceIcon from '@/shared/assets/icons/place-icon.svg?react';
import CheckIcon from '@/shared/assets/icons/check-icon.svg?react';
import TagIcon from '@/shared/assets/icons/tag-icon.svg?react';
import SmileIcon from '@/shared/assets/icons/smile-icon.svg?react';
import SunGlassesIcon from '@/shared/assets/icons/sunGlasses-icon.png';
import Header from '@/tutorials/components/Header';
import Tag from '@/tutorials/components/Tag';
import Button from '@/tutorials/components/Button';

const ClubsPage = () => {
  return (
    <main>
      <Header images={[clubImage1, clubImage2, clubImage3, clubImage4]} />
    </main>
  );
};

export default ClubsPage;
