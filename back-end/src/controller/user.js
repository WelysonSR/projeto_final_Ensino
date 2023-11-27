const userService = require('../service/user')

async function login(req, res) {
    const result = await userService.login(req.body)
    res.status(200).json(result)
}

async function createUser(req, res) {
    const result = await userService.createUser(req.body)
    res.status(200).json(result)
}

async function updateUser(req, res) {
    await userService.updateUser(req.params.id, req.body)
    res.status(200).json({ message: 'Alteração feita com sucesso!' })
}

async function deleteUserById(req, res) {
    await userService.deleteUserById(req.params.id)
    res.status(200).json({ message: 'Usuário deletado com sucesso!' })
}
module.exports = {
    login, createUser, updateUser, deleteUserById
}