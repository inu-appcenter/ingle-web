import axios from 'axios';

const url = 'https://ingle-sever.inuappcenter.kr';

export async function getLoginPortal(studentId: string, password: string) {
  const res = await axios.post(url, {
    studentId,
    password,
  });
  return res.data;
}
