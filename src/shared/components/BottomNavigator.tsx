// import HomeIcon from '@/shared/assets/icons/home-icon.svg?react';
// import MapIcon from '@/shared/assets/icons/map-icon.svg?react';
// import StampIcon from '@/shared/assets/icons/stamp-icon.svg?react';
// import UserIcon from '@/shared/assets/icons/user-icon.svg?react';
import { ROUTES } from '@/router/routes';
import { Link, useLocation, useNavigate } from 'react-router';

const BottomNavigator = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 
                    w-[90%] max-w-xs h-16 p-1  backdrop-blur-md
                    rounded-full bg-[#E8E5EF]/60
                    "
    >
      <ul className="h-full flex flex-row justify-between text-center text-xs">
        {/* Home으로 이동 */}
        <li
          className={`flex-1 flex flex-col gap-2 justify-center rounded-full ${location.pathname.includes('/tutorial') && 'bg-[#ffffff]'}`}
        >
          <Link to={ROUTES.TUTORIAL}>
            <img
              src="/icons/home-icon.svg"
              alt="Home"
              className="w-[18px] h-[18px] mx-auto"
            />
            <p>Home</p>
          </Link>
        </li>

        {/* Map으로 이동 */}
        <li
          className={`flex-1 flex flex-col gap-1 justify-center rounded-full ${location.pathname.includes('/map') && 'bg-[#ffffff]'}`}
          onClick={() => navigate(ROUTES.MAP)}
        >
          <img
            src="/icons/map-icon.svg"
            alt="Map"
            className="w-[16px] h-[16px] mx-auto"
          />
          <p>Map</p>
        </li>

        {/* My Stamps로 이동 */}
        <li
          className={`flex-1 flex flex-col gap-2 justify-center rounded-full ${location.pathname.includes('/stamp') && 'bg-[#ffffff]'}`}
        >
          <Link to={ROUTES.STAMP}>
            <img
              src="/icons/stamp-icon.svg"
              alt="Stamp"
              className="w-[18px] h-[18px] mx-auto"
            />
            <p>Stamp</p>
          </Link>
        </li>

        {/* Profile로 이동 */}
        <li
          className={`flex-1 flex flex-col gap-2 justify-center rounded-full ${location.pathname.includes('/profile') && 'bg-[#ffffff]'}`}
        >
          <Link to={ROUTES.PROFILE}>
            <img
              src="/icons/user-icon.svg"
              alt="Profile"
              className="w-[18px] h-[18px] mx-auto"
            />
            <p>Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigator;
