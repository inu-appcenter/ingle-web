import HomeIcon from '@/shared/assets/icons/home-icon.svg';
import MapIcon from '@/shared/assets/icons/map-icon.svg';
import StampIcon from '@/shared/assets/icons/stamp-icon.svg';
import UserIcon from '@/shared/assets/icons/user-icon.svg';
import { Link } from 'react-router';

const BottomNavigator = () => {
  return (
    <nav className="w-full h-16 px-4 border border-t-1">
      <ul className="flex flex-row justify-between my-2 text-center">
        {/* Home으로 이동 */}
        <li className="justify-center items-center">
          <Link to="/tutorial">
            <img src={HomeIcon} />
            <p>Home</p>
          </Link>
        </li>

        {/* Map으로 이동 */}
        <li>
          <Link to="/map">
            <img src={MapIcon} className="mx-auto" />
            <p>Map</p>
          </Link>
        </li>

        {/* My Stamps로 이동 */}
        <li className="">
          <Link to="/reward">
            <img src={StampIcon} className="mx-auto" />
            <p>Stamp</p>
          </Link>
        </li>

        {/* Profile로 이동 */}
        <li>
          <Link to="/profile">
            <img src={UserIcon} className="mx-auto" />
            <p>Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigator;
