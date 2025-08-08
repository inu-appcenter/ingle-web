import axios from 'axios';

export async function portalLogin(data: {
  studentId: string;
  password: string;
}) {
  try {
    const res = await axios.post('/api/v1/auth/login', data);
    return { status: res.status, data: res.data };
  } catch (error: any) {
    if (error.response) {
      return {
        status: error.response.status,
        data: error.response.data,
      };
    } else {
      throw new Error('network error');
    }
  }
}
