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

async function getAllGames(_req, res) {
    const result = await gameService.getAllGames();
    res.status(200).json(result);
}

async function getPlatformByGames(req, res) {
    const result = await gameService.getPlatformByGames(req.params.id);
    res.status(200).json(result);
  }

module.exports = {
    insertGame,
    updateGame,
    deleteGame,
    getAllGames,
    getPlatformByGames,
}