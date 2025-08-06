import { create } from 'zustand';

const TOKEN_KEY = 'app_jwt';
const REMEMBER_KEY = 'app_jwt_remember';

interface AuthState {
  currentStep: 'intro' | 'portal' | 'studentInfo' | 'finish';
  portalStudentId: string; // 2단계에서 비교를 위해 저장?

  studentType: string;
  department: string;
  studentIdInput: string; //얘는 별로 필요하지 않을 것 같은데..
  nickname: string;

  token: string | null;
  remember: boolean; //true면 로컬스토리지에 저장, false면 세션스토리지에 저장

  isAuthenticated: boolean; // 로그인 상태 여부

  setStep: (step: AuthState['currentStep']) => void;
  setPortalStudentId: (id: string) => void;
  setStudentInfo: (
    info: Partial<
      Omit<AuthState, 'setStep' | 'setPortalStudentId' | 'setStudentInfo'>
    >,
  ) => void;

  setToken: (token: string | null, remember?: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  currentStep: 'intro',
  portalStudentId: '',
  studentType: '',
  department: '',
  studentIdInput: '',
  nickname: '',

  token: null,
  remember: false,
  isAuthenticated: false,

  setStep: step => set({ currentStep: step }),
  setPortalStudentId: id => set({ portalStudentId: id }),
  setStudentInfo: info => set(state => ({ ...state, ...info })),

  setToken: (token, remember = false) => {
    if (token) {
      // 저장할 장소 결정
      try {
        if (remember) {
          localStorage.setItem(TOKEN_KEY, token);
          localStorage.setItem(REMEMBER_KEY, '1');
        } else {
          sessionStorage.setItem(TOKEN_KEY, token);
          localStorage.removeItem(REMEMBER_KEY);
        }
      } catch (e) {
        console.warn('storage write failed', e);
      }
      set({ token, remember, isAuthenticated: true });
    } else {
      // null이면 로그아웃 동작
      try {
        localStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REMEMBER_KEY);
      } catch (e) {}
      set({ token: null, remember: false, isAuthenticated: false });
    }
  },

  logout: () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REMEMBER_KEY);
    } catch (e) {}
    set({
      token: null,
      remember: false,
      isAuthenticated: false,
      currentStep: 'intro',
    });
  },
}));
