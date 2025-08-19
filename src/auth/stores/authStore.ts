import { create } from 'zustand';

const REMEMBER_KEY = 'remember';

type TokenInfo = {
  accessToken: string;
  accessTokenExpiresDate: Date;
};

interface AuthState {
  currentStep: 'intro' | 'portal' | 'studentInfo' | 'finish';
  portalId: string;

  // 학생 정보
  studentId: string;
  studentType: string;
  department: string;
  nickname: string;

  accessToken: string | null;
  expiryTime: string | null;
  remember: boolean; // [ ] 아직...
  isAuthenticated: boolean; // 로그인 상태 여부

  setStep: (step: AuthState['currentStep']) => void;
  setStudentInfo: (
    info: Partial<Omit<AuthState, 'setStep' | 'setPortalStudentId' | 'setStudentInfo'>>,
  ) => void;
  setTokens: (access: string, expire: string) => void;
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
  expiryTime: null,
  remember: false,
  isAuthenticated: false,

  setStep: step => set({ currentStep: step }),
  setStudentInfo: info => set(state => ({ ...state, ...info })),

  // access token, expireDate 저장
  setTokens: (access, expire) => {
    try {
      // 메모리에 저장
      set({
        isAuthenticated: true,
        accessToken: access,
        expiryTime: expire,
      });
    } catch (e) {
      console.warn('storage write failed', e);
    }
  },

  clearTokens: () => {
    try {
      localStorage.removeItem(REMEMBER_KEY);
    } catch (e) {
      console.warn('storage clear failed', e);
    }
    set({
      accessToken: null,
      expiryTime: null,
      remember: false,
      isAuthenticated: false,
      currentStep: 'intro',
    });
  },
}));

// 👇 디버깅용 (브라우저 콘솔에서 접근 가능)
if (typeof window !== 'undefined') {
  (window as any).authStore = useAuthStore;
}
