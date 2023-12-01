import axios from 'axios'

const URL_BASE = 'http://localhost:3001';

export const loginAxios = async (data) => {
  const URL = `${URL_BASE}/user/login`;
  const response = await axios.post(URL, data);
  return response.data;
};

export const addGamesAxios = async (data) => {
  const URL = `${URL_BASE}/user/game`;
  const response = await axios.get(URL, data);
  return response.data;
};

export const gamesAxios = async () => {
  const URL = `${URL_BASE}/game`;
  const response = await axios.get(URL);
  return response.data;
};