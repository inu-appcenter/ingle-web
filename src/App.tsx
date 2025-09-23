import AdminPage from '@/admin';
import AuthPage from '@/auth';
import MapPage from '@/map';
import NotFoundPage from '@/not-fuound';
import ProfilePage from '@/profile';
import DeletePage from '@/profile/DeletePage';
import EditPage from '@/profile/EditPage';
import EditImagePage from '@/profile/EditImagePage';
import SupportPage from '@/profile/SupportPage';
import { ROUTES } from '@/router/routes';
import BottomNavigator from '@/shared/components/BottomNavigator';
import { useTutorialModal } from '@/shared/stores/modalStore';
import StampPage from '@/stamp';
import TutorialPage from '@/tutorials';
import TutorialModal from '@/tutorials/components/Modal';
import TutorialDetailPage from '@/tutorials/pages/TutorialDetailPage';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

function AppWrapper() {
  const location = useLocation();
  const isAdmin = location.pathname === ROUTES.ADMIN;
  const isAuth = location.pathname === ROUTES.AUTH;
  const { isOpen, openModal, closeModal } = useTutorialModal();

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
            <Route path={ROUTES.TRANSIT} element={<TutorialDetailPage />} />
            <Route path={ROUTES.DORMITORY} element={<TutorialDetailPage />} />
            <Route path={ROUTES.LIBRARY} element={<TutorialDetailPage />} />
            <Route path={ROUTES.CLUBS} element={<TutorialDetailPage />} />
            <Route path={ROUTES.FESTIVAL} element={<TutorialDetailPage />} />
            <Route path={ROUTES.TUITION} element={<TutorialDetailPage />} />
            <Route path={ROUTES.COURSES} element={<TutorialDetailPage />} />
            <Route path={ROUTES.CURRICULUM} element={<TutorialDetailPage />} />
            <Route path={ROUTES.GRADES} element={<TutorialDetailPage />} />
            <Route path={ROUTES.HOSPITAL} element={<TutorialDetailPage />} />
            <Route path={ROUTES.INSURANCE} element={<TutorialDetailPage />} />
            <Route path={ROUTES.JOBS} element={<TutorialDetailPage />} />
            <Route path={ROUTES.K_CULTURE} element={<TutorialDetailPage />} />
            <Route path={ROUTES.STAMP} element={<StampPage />} />
            <Route path={ROUTES.MAP} element={<MapPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={`${ROUTES.PROFILE}/edit`} element={<EditPage />} />
            <Route path={ROUTES.PROFILE_EDIT_IMAGE} element={<EditImagePage />} />
            <Route path={`${ROUTES.PROFILE}/delete`} element={<DeletePage />} />
            <Route path={`${ROUTES.PROFILE}/support`} element={<SupportPage />} />
            <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
          </Routes>
        </main>
        {/* AuthPage에서는 BottomNavigator 숨김 */}
        {!isAuth && <BottomNavigator />}

        {isOpen && <TutorialModal isOpen={isOpen} onClose={closeModal} />}
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
