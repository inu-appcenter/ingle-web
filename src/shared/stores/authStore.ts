import { create } from 'zustand';

interface AuthState {
  currentStep: 'intro' | 'portal' | 'studentInfo' | 'finish';
  portalId: string;

  // 학생 정보
  studentId: string;
  studentType: string;
  department: string;
  nickname: string;
  country: string;

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
  country: '',

  accessToken: null,
  expiryTime: null,
  remember: false,
  isAuthenticated: false,

  setStep: step => set({ currentStep: step }),
  setStudentInfo: info => set(state => ({ ...state, ...info })),

  // access token, expireDate 저장
  setTokens: (access, expire) => {
    try {
      // 로컬 스토리지에에 저장
      localStorage.setItem('AccessToken', access);
      localStorage.setItem('AccessTokenExpireTime', expire);
      localStorage.setItem('isAuthenticated', 'true');
    } catch (e) {
      console.warn('storage write failed', e);
    }
  },

  clearTokens: () => {
    try {
      localStorage.removeItem('AccessToken');
      localStorage.removeItem('AccessTokenExpireTime');
      localStorage.removeItem('isAuthenticated');
    } catch (e) {
      console.warn('storage clear failed', e);
    }
  },
}));
