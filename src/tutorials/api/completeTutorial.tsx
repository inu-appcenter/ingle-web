import instance from '@/shared/api/intercepter';

export const handleComplete = async ({ tutorialNum }: { tutorialNum: number }) => {
  try {
    const res = await instance.post(`/api/v1/stamps/tutorials/${tutorialNum}/complete`);
    console.log('튜토리얼 완료 처리 결과:', res.data);
    alert(`튜토리얼 ${tutorialNum}이(가) 성공적으로 완료 처리되었습니다!`);
  } catch (error: any) {
    // if (error.response?.status === 409) {
    //   alert('이미 완료된 튜토리얼');
    // }
    console.error('피드백 전송 오류:', error);
    alert('피드백 전송 중 오류가 발생했습니다.');
  }
};
