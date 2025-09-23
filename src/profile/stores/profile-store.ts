import { create } from 'zustand';

interface ProfileStore {
  memberId: number;
  studentId: string;
  department: string;
  studentType: string;
  country?: string;
  nickname?: string;
  imageUrl?: string;
  setProfile: (
    memberId: number,
    studentId: string,
    department: string,
    studentType: string,
    country?: string,
    nickname?: string,
    imageUrl?: string,
  ) => void;
  resetProfile: () => void;
}

export const useProfileStore = create<ProfileStore>(set => ({
  memberId: 0,
  studentId: '',
  department: '',
  studentType: '',
  nickname: '',
  imageUrl: '',
  setProfile: (
    memberId,
    studentId,
    department,
    studentType,
    country,
    nickname,
    imageUrl,
  ) =>
    set(() => ({
      memberId,
      studentId,
      department,
      studentType,
      country,
      nickname,
      imageUrl,
    })),
  resetProfile: () =>
    set(() => ({
      memberId: 0,
      studentId: '',
      department: '',
      studentType: '',
      nickname: '',
      imageUrl: '',
    })),
}));
