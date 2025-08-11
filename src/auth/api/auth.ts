import axios from 'axios';

export async function SignUp(data: {
  studentId: string;
  department: string;
  studentType: string;
  nickname: string;
}) {
  const res = await axios.post(import.meta.env.VITE_SIGN_UP_URL, data);
  return res;
}

async function PortalLogin(data: { studentId: string; password: string }) {
  const res = await axios.post(import.meta.env.VITE_PORTAL_URL, {
    studentId: data.studentId,
    password: data.password,
  });
  return res;
}
