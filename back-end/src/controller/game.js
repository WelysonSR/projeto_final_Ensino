const gameService = require('../service/game');

async function insertGame(req, res) {
  await gameService.insertGame(req.body);
  res.status(200).json({ message: 'Jogo adicionado com sucesso!' });
}

module.exports = {
  insertGame,
}