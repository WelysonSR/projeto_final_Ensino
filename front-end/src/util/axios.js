import axios from 'axios'

const URL_BASE = 'http://localhost:3001';

export const loginAxios = async (data) => {
  const URL = `${URL_BASE}/user/login`;
  const response = await axios.post(URL, data);
  return response.data;
};