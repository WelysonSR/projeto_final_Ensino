const platformModels = require('../models/platform');

async function insertPlatform(data) {
  const result = platformModels.insertPlatform(data);
  return result;
}

async function updatePlatform(id, data) {
  await platformModels.updatePlatform(id, data);
}

async function deletePlatform(id){
  await platformModels.deletePlatform(id);
}

async function getAllPlatform() {
  return await platformModels.getAllPlatform();
}

module.exports = {
  insertPlatform,
  updatePlatform,
  deletePlatform,
  getAllPlatform
}