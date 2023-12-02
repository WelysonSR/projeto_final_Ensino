import axios from 'axios'

const URL_BASE = 'http://localhost:3001';

// Rota User
export const loginAxios = async (data) => {
  try {
    const URL = `${URL_BASE}/user/login`;
    const response = await axios.post(URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addGamesAxios = async (data) => {
  try {
    const URL = `${URL_BASE}/user/game`;
    const response = await axios.post(URL, data);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const gatGamesAxios = async (id) => {
  try {
    const URL = `${URL_BASE}/user/games/${id}`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeGamesAxios = async (data) => {
  try {
    const URL = `${URL_BASE}/user/delete-game`;
    const response = await axios.post(URL, data);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

// Rota Jogo
export const gamesAxios = async () => {
  try {
    const URL = `${URL_BASE}/game`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Rota Plataforma
