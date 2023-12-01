const userService = require('../service/user');

async function login(req, res) {
    const result = await userService.login(req.body);
    res.status(200).json(result);
}

async function createUser(req, res) {
    const result = await userService.createUser(req.body);
    res.status(200).json(result);
}

async function updateUser(req, res) {
    await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ message: 'Alteração feita com sucesso!' });
}

async function deleteUserById(req, res) {
    await userService.deleteUserById(req.params.id);
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
}

async function logicalUserDeletionById(req, res) {
    await userService.logicalUserDeletionById(req.params.id, req.body);
    res.status(200).json({ message: 'Usuário desativado com sucesso!' });
}

async function getGamesByUserId(req, res) {
    const result = await userService.getGamesByUserId(req.params.id);
    res.status(200).json(result);
}

async function addGameToUser(req, res) {
    const { userId, jogoId } = req.body;
    await userService.addGameToUser(userId, jogoId);
    res.status(200).json({ message: 'Jogo adicionado com sucesso!' });
}

async function removeGameFromUser(req, res) {
    const { userId, jogoId } = req.body;
    await userService.removeGameFromUser(userId, jogoId);
    res.status(200).json({ message: 'Jogo removido com sucesso!' });
}

module.exports = {
    login,
    createUser,
    updateUser,
    deleteUserById,
    logicalUserDeletionById,
    getGamesByUserId,
    addGameToUser,
    removeGameFromUser,
}