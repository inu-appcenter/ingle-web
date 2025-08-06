//Zustand로 상태 전역 관리
//잘 모르겠지만.. 우선 한다.
// src/auth/stores/authStore.ts

import { create } from 'zustand';

interface AuthState {
  currentStep: 'intro' | 'portal' | 'studentInfo' | 'finish';
  portalStudentId: string; // 2단계에서 비교를 위해 저장?

  studentType: string;
  department: string;
  studentIdInput: string; //얘는 별로 필요하지 않을 것 같은데..
  nickname: string;

  setStep: (step: AuthState['currentStep']) => void;
  setPortalStudentId: (id: string) => void;
  setStudentInfo: (
    info: Partial<
      Omit<AuthState, 'setStep' | 'setPortalStudentId' | 'setStudentInfo'>
    >,
  ) => void;
}

export const useAuthStore = create<AuthState>(set => ({
  currentStep: 'intro',
  portalStudentId: '',
  studentType: '',
  department: '',
  studentIdInput: '',
  nickname: '',
  setStep: step => set({ currentStep: step }),
  setPortalStudentId: id => set({ portalStudentId: id }),
  setStudentInfo: info => set(state => ({ ...state, ...info })),
}));
