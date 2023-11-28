const gameModel = require('../models/game');

async function insertGame(data) {
  const result = await gameModel.insertGame(data);
  return result;
}

module.exports = {
  insertGame,
}