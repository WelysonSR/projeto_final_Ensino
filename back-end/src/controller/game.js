const gameService = require('../service/game');

async function insertGame(req, res) {
  await gameService.insertGame(req.body);
  res.status(200).json({ message: 'Jogo adicionado com sucesso!' });
}

async function updateGame(req, res) {
  await gameService.updateGame(req.params.id, req.body);
  res.status(200).json({ message: 'Jogo atualizado com sucesso!' });
}

async function deleteGame(req, res) {
  await gameService.deleteGame(req.params.id);
  res.status(200).json({ message: 'Jogo deletado com sucesso!' });
}

module.exports = {
  insertGame,
  updateGame,
  deleteGame,
}