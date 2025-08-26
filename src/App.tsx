
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TutorialPage from '@/tutorials';
import AdminPage from '@/admin';

import AuthPage from '@/auth';
import MapPage from '@/map';
import NotFoundPage from '@/not-fuound';
import ProfilePage from '@/profile';
import { ROUTES } from '@/router/routes';
import BottomNavigator from '@/shared/components/BottomNavigator';
import StampPage from '@/stamp';
import TutorialPage from '@/tutorials';
import TutorialDetailPage from '@/tutorials/pages/TutorialDetailPage';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

function AppWrapper() {
  const location = useLocation();
  const isAdmin = location.pathname === ROUTES.ADMIN;
  const isAuth = location.pathname === ROUTES.AUTH;

  // 관리자 페이지는 기존 레이아웃 유지
  if (isAdmin) {
    return <AdminPage />;
  }

  return (
    <div className="flex bg-neutral-100 h-screen justify-center font-manrope">
      <div className="w-full max-w-[480px] h-full bg-white shadow-lg flex flex-col">
        <main className="flex-1 overflow-y-auto min-h-0 scrollbar-hide">
          <Routes>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
            <Route path={ROUTES.TUTORIAL} element={<TutorialPage />} />
            <Route path={`${ROUTES.TUTORIAL}/:params`} element={<TutorialDetailPage />} />
            <Route path={ROUTES.STAMP} element={<StampPage />} />
            <Route path={ROUTES.MAP} element={<MapPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* AuthPage에서는 BottomNavigator 숨김 */}
        {!isAuth && <BottomNavigator />}
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
