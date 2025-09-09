import HomeIcon from '@/shared/assets/icons/home-icon.svg?react';
import MapIcon from '@/shared/assets/icons/map-icon.svg?react';
import StampIcon from '@/shared/assets/icons/stamp-icon.svg?react';
import UserIcon from '@/shared/assets/icons/user-icon.svg?react';
import { Link } from 'react-router';
import { ROUTES } from '@/router/routes';

const BottomNavigator = () => {
  return (
    <nav className="w-full h-16 px-4 border border-t-1">
      <ul className="flex flex-row justify-between my-2 text-center">
        {/* Home으로 이동 */}
        <li className="justify-center items-center">
          <Link to={ROUTES.TUTORIAL}>
            <HomeIcon />
            <p>Home</p>
          </Link>
        </li>

        {/* Map으로 이동 */}
        <li>
          <Link to={ROUTES.MAP}>
            {/* <img src={MapIcon} className="mx-auto" /> */}
            <MapIcon />
            <p>Map</p>
          </Link>
        </li>

        {/* My Stamps로 이동 */}
        <li className="">
          <Link to={ROUTES.STAMP}>
            {/* <img src={StampIcon} className="mx-auto" /> */}
            <StampIcon />
            <p>Stamp</p>
          </Link>
        </li>

        {/* Profile로 이동 */}
        <li>
          <Link to={ROUTES.PROFILE}>
            {/* <img src={UserIcon} className="mx-auto" /> */}
            <UserIcon />
            <p>Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigator;
