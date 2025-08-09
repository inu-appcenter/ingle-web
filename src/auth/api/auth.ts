import axios from 'axios';

export default async function SignUp(data: {
  studentId: string;
  department: string;
  studentType: string;
  nickname: string;
}) {
  const res = await axios.post(import.meta.env.VITE_SIGN_UP_URL, data);
  return data;
}
