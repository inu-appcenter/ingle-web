import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TutorialPage from '@/tutorials';
import AuthPage from '@/auth';
import RewardPage from '@/reward';
import MapPage from '@/map';
import NotFoundPage from '@/shared';
import ProfilePage from '@/profile';

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
