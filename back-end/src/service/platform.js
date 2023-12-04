const platformModels = require('../models/platform');

async function insertPlatform(data) {
  const result = platformModels.insertPlatform(data);
  return result;
}

async function updatePlatform(id, data) {
  await platformModels.updatePlatform(id, data);
}

async function deletePlatform(id){
  try {
    await platformModels.deletePlatform(id);
  } catch (error) {
    throw new Error('409|Plataforma vinculado a uma jogo.')
  }
}

async function getAllPlatform() {
  return await platformModels.getAllPlatform();
}

async function addGameToPlatform(idGame, idPlatform) {
  try {
      if (!idGame || !idPlatform) throw new Error('400|idPlatform e idGame são obrigatórios.');
      await platformModels.addGameToPlatform(idGame, idPlatform);
  } catch (error) {
      throw new Error('409|O jogo já existe nessa Plataforma e não pode ser duplicado.');
  }

}

async function removeGameFromPlatform(idGame, idPlatform) {
  await platformModels.removeGameFromPlatform(idGame, idPlatform);
}

async function getGamesByPlatform(idPlatform) {
  return await platformModels.getGamesByPlatform(idPlatform);
}

module.exports = {
  insertPlatform,
  updatePlatform,
  deletePlatform,
  getAllPlatform,
  addGameToPlatform,
  removeGameFromPlatform,
  getGamesByPlatform,
}