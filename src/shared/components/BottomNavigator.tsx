import HomeIcon from '@/shared/assets/icons/home-icon.svg';
import { Link } from 'react-router';

const BottomNavigator = () => {
  return (
    <nav className="w-full h-16 px-4 border border-t-1">
      <ul className="flex flex-row justify-between my-2 text-center">
        {/* Home으로 이동 */}
        <li>
          <Link to="/">
            <img src={HomeIcon} />
            <p>Home</p>
          </Link>
        </li>

        {/* Map으로 이동 */}
        <li>
          <Link to="/map">
            <img src={HomeIcon} />
            <p>Map</p>
          </Link>
        </li>

        {/* My Stamps로 이동 */}
        <li>
          <Link to="/reward">
            <img src={HomeIcon} />
            <p>My Stamps</p>
          </Link>
        </li>

        {/* Profile로 이동 */}
        <li>
          <Link to="/profile">
            <img src={HomeIcon} />
            <p>Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigator;
