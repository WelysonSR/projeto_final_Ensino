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

export const getUserAxios = async (data) => {
  try {
    const URL = `${URL_BASE}/user`;
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

export const getGamesAxios = async (id) => {
  try {
    const URL = `${URL_BASE}/user/games/${id}`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserAxios = async (id, data) => {
  try {
    const URL = `${URL_BASE}/user/update/${id}`;
    const response = await axios.patch(URL, data);
    return response.data.message;
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

export const createUserAxios = async (data) => {
  try {
    const URL = `${URL_BASE}/user/create`;
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

export const createJogoAxios = async (data) => {
  try {
    const URL = `${URL_BASE}/game/insert`;
    const response = await axios.post(URL, data);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const deletGamesAxios = async (id) => {
  try {
    const URL = `${URL_BASE}/game/delete/${id}`;
    const response = await axios.delete(URL);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const updateGamesAxios = async (id, data) => {
  try {
    const URL = `${URL_BASE}/game/update/${id}`;
    const response = await axios.patch(URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Rota Plataforma
export const getPlataformaAxios = async () => {
  try {
    const URL = `${URL_BASE}/platform`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPlataformaAxios = async (data) => {
  try {
    const URL = `${URL_BASE}/platform/insert`;
    const response = await axios.post(URL, data);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const updatePlataformaAxios = async (id, data) => {
  try {
    const URL = `${URL_BASE}/platform/update/${id}`;
    const response = await axios.patch(URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletPlataformaAxios = async (id) => {
  try {
    const URL = `${URL_BASE}/platform/delete/${id}`;
    const response = await axios.delete(URL);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const addJogoPlataformaAxios = async (data) => {
  try {
    const URL = `${URL_BASE}/platform/game`;
    const response = await axios.post(URL, data);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const getJogosPlataformaAxios = async (id) => {
  try {
    const URL = `${URL_BASE}/platform/${id}/games`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletJogosPlataformaAxios = async (data) => {
  try {
    const URL = `${URL_BASE}/platform/delete-game`;
    const response = await axios.delete(URL, {data});
    return response.data.message;
  } catch (error) {
    throw error;
  }
};