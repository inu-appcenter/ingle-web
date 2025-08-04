import AuthPage from '@/auth';
import MapPage from '@/map';
import ProfilePage from '@/profile';
import RewardPage from '@/reward';
import NotFoundPage from '@/shared';
import TutorialPage from '@/tutorials';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex justify-center bg-neutral-100 min-h-screen">
        <div className="w-full max-w-[480px] min-h-screen bg-white shadow-lg">
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/tutorial" element={<TutorialPage />} />
            <Route path="/reward" element={<RewardPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
