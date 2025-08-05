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
import BottomNavigator from '@/shared/components/BottomNavigator';
import TutorialDetailPage from '@/tutorials/pages/TutorialDetailPage';

function AppWrapper() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  // 관리자 페이지는 기존 레이아웃 유지
  if (isAdmin) {
    return <AdminPage />;
  }

  return (
    <div className="flex bg-neutral-100 h-screen justify-center">
      <div className="w-full max-w-[480px] h-full bg-white shadow-lg flex flex-col">
        {/* 컨텐츠 영역 - flex-1으로 남은 공간 모두 차지하고 overflow 처리 */}
        <main className="flex-1 overflow-y-auto min-h-0 scrollbar-hide">
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/tutorial" element={<TutorialPage />} />
            <Route path="/tutorial/:id" element={<TutorialDetailPage />} />
            <Route path="/reward" element={<RewardPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* 바텀 네비게이터 영역 - 항상 하단에 고정 */}
        <BottomNavigator />
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
