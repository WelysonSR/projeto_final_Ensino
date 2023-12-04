const gameModel = require('../models/game');

async function insertGame(data) {
  try {
    const result = await gameModel.insertGame(data);
    return result;
  } catch (error) {
    throw new Error('400|Erro ao cadastrar: Verifique se todos os campos estão preenchidos corretamente.')
  }
}

async function updateGame(gameId, game) {
  const result = await gameModel.updateGame(gameId, game);
  return result;
}

async function deleteGame(gameId) {
  try {
    const result = await gameModel.deleteGame(gameId);
    return result;
  } catch (error) {
    throw new Error('409|Jogo vinculado a uma Jogador e/ou Plataforma')
  }
}

async function getAllGames() {
  const result = await gameModel.getAllGames();
  return result;
}

async function getPlatformByGames(idGame) {
  const result = await gameModel.getPlatformByGames(idGame);
  return result;
}

module.exports = {
  insertGame,
  updateGame,
  deleteGame,
  getAllGames,
  getPlatformByGames
}