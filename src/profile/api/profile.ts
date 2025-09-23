import instance from '@/shared/api/intercepter';

export const logout = async () => {
  try {
    const res = await instance.delete('/api/v1/auth/logout');
    console.log('로그아웃 결과 :', res);
  } catch (error) {
    console.error('로그아웃 에러 발생', error);
    throw new Error('로그아웃 에러 발생');
  }
};

export const editMembers = async (
  studentId: string,
  department: string,
  studentType: string,
  nickname: string,
  country: string,
) => {
  try {
    const res = await instance.put('/api/v1/members', {
      studentId,
      department,
      studentType,
      nickname,
      country,
    });
    console.log('프로필 수정 결과:', res.data);
    return res.data;
  } catch (error) {
    console.error('프로필 수정 에러 발생:', error);
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const res = await instance.get('/api/v1/members');
    return res.data;
  } catch (error) {
    console.error('프로필 조회 에러 발생:', error);
    throw error;
  }
};

export const deleteAccount = async (reason?: string) => {
  try {
    const res = await instance.delete('/api/v1/auth', {
      data: {
        content: reason,
      },
    });
    return res.data;
  } catch (error) {
    console.error('탈퇴 에러 발생:', error);
    throw error;
  }
};
