// import HomeIcon from '@/shared/assets/icons/home-icon.svg?react';
// import MapIcon from '@/shared/assets/icons/map-icon.svg?react';
// import StampIcon from '@/shared/assets/icons/stamp-icon.svg?react';
// import UserIcon from '@/shared/assets/icons/user-icon.svg?react';
import { Link } from 'react-router';
import { ROUTES } from '@/router/routes';

const BottomNavigator = () => {
  return (
    <nav className="w-full h-16 px-4 border border-t-1">
      <ul className="flex flex-row justify-between my-2 text-center">
        {/* Home으로 이동 */}
        <li className="justify-center items-center">
          <Link to={ROUTES.TUTORIAL}>
            <img src="/icons/home-icon.svg" alt="Home" className="w-6 h-6 mx-auto" />
            <p>Home</p>
          </Link>
        </li>

        {/* Map으로 이동 */}
        <li>
          <Link to={ROUTES.MAP}>
            <img src="/icons/map-icon.svg" alt="Map" className="w-6 h-6 mx-auto" />
            <p>Map</p>
          </Link>
        </li>

        {/* My Stamps로 이동 */}
        <li className="">
          <Link to={ROUTES.STAMP}>
            <img src="/icons/stamp-icon.svg" alt="Stamp" className="w-6 h-6 mx-auto" />
            <p>Stamp</p>
          </Link>
        </li>

        {/* Profile로 이동 */}
        <li>
          <Link to={ROUTES.PROFILE}>
            <img src="/icons/user-icon.svg" alt="Profile" className="w-6 h-6 mx-auto" />
            <p>Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigator;
