import { create } from 'zustand';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const REMEMBER_KEY = 'remember';

type ServerResponse = {
  memberId: number;
  studentId: string;
  department: string;
  studentType: string;
  nickname: string;
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
  expiryTime: Date | null;
  remember: boolean; // ? : 아직 잘 모르겠다.
  isAuthenticated: boolean; // 로그인 상태 여부

  setStep: (step: AuthState['currentStep']) => void;
  setStudentInfo: (
    info: Partial<Omit<AuthState, 'setStep' | 'setPortalStudentId' | 'setStudentInfo'>>,
  ) => void;
  setTokens: (res: ServerResponse) => void;
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
  setTokens: (res: ServerResponse) => {
    try {
      // 메모리에 저장
      set({
        isAuthenticated: true,
        accessToken: res.accessToken,
        expiryTime: res.accessTokenExpiresDate,

        studentId: res.studentId,
        department: res.department,
        studentType: res.studentType,
        nickname: res.nickname,
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
      remember: false,
      isAuthenticated: false,
      currentStep: 'intro',
    });
  },
}));
