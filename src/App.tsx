import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import TutorialPage from '@/tutorials';
import AuthPage from '@/auth';
import RewardPage from '@/reward';
import MapPage from '@/map';
import NotFoundPage from '@/shared';
import ProfilePage from '@/profile';
import AdminPage from '@/admin';

function AppWrapper() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <div
      className={
        isAdmin ? '' : 'flex justify-center bg-neutral-100 min-h-screen'
      }
    >
      <div
        className={
          isAdmin ? '' : 'w-full max-w-[480px] min-h-screen bg-white shadow-lg'
        }
      >
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/reward" element={<RewardPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
