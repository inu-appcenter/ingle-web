import { useCookies } from 'react-cookie';
import { create } from 'zustand';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const REMEMBER_KEY = 'remember';
const [Cookies, setCookie] = useCookies(['refresh']);

interface AuthState {
  currentStep: 'intro' | 'portal' | 'studentInfo' | 'finish';
  portalId: string;

  // 정보 입력 단계
  studentId: string;
  studentType: string;
  department: string;
  nickname: string;

  setStep: (step: AuthState['currentStep']) => void;
  setStudentInfo: (
    info: Partial<
      Omit<AuthState, 'setStep' | 'setPortalStudentId' | 'setStudentInfo'>
    >,
  ) => void;

  accessToken: string | null;
  refreshToken: string | null;
  remember: boolean; //true면 로컬스토리지에 저장, false면 세션스토리지에 저장

  isAuthenticated: boolean; // 로그인 상태 여부

  setTokens: (access: string, refresh: string, remember?: boolean) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  currentStep: 'intro',
  studentType: '',
  portalId: '',
  department: '',
  studentId: '',
  nickname: '',

  accessToken: null,
  refreshToken: null,
  remember: false,
  isAuthenticated: false,

  setStep: step => set({ currentStep: step }),
  setStudentInfo: info => set(state => ({ ...state, ...info })),

  setTokens: (access: string, refresh: string, remember = false) => {
    // 저장할 장소 결정
    try {
      //remember 여부 저장
      if (remember) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
        localStorage.setItem(REMEMBER_KEY, '1');
      } else {
        sessionStorage.setItem(REFRESH_TOKEN_KEY, refresh);
        localStorage.removeItem(REMEMBER_KEY);
      }

      //accessToken은 메모리에만 저장
      set({
        accessToken: access,
        remember,
        isAuthenticated: true,
      });
    } catch (e) {
      console.warn('storage write failed', e);
    }
  },

  clearTokens: () => {
    try {
      localStorage.removeItem(REMEMBER_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    } catch (e) {
      console.warn('storage clear failed', e);
    }
    set({
      accessToken: null,
      remember: false,
      isAuthenticated: false,
      currentStep: 'intro',
    });
  },
}));
