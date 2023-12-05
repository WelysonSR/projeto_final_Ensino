const userModel = require('../models/user')
const generateJWT = require('../util/generatejwt')
const md5 = require('md5')

async function login({ user, password }) {
  const verify = await userModel.getUser(user)
  if (!verify) {
    throw new Error('404|Esse usuário não existe')
  }
  if (md5(password).localeCompare(verify.password)) {
    throw new Error('401|Senha incorreta')
  }
  const newUser = {
    id: verify.id,
    firstName: verify.firstName,
    lastName: verify.lastName,
    password: verify.password,
    email: verify.email,
    user: verify.user,
    token: generateJWT(verify)
  }
  return newUser
}

async function getUser({user}) {
  try {
  const result = await userModel.getUser(user)
  return result
  } catch (error) {
    throw new Error('400|Usuário não encontrado')
  }
}

async function createUser(data) {
  const verify = await userModel.getUser(data.user)
  if (verify) {
    throw new Error('409|Usuário já existente')
  }
  try {
    await userModel.insertUser({ ...data, password: md5(data.password) })
    return { message: 'Cadastro efetuado com sucesso' }
  } catch (error) {
    throw new Error(`500|${error.message}`)
  }
}

async function updateUser(id, updateUser) {
  const result = await userModel.patchUser(id, { ...updateUser, password: md5(updateUser.password) });
  return result;
}

async function deleteUserById(id) {
  await userModel.deleteUserById(id);
}

async function logicalUserDeletionById(id, delit) {
  await userModel.logicalUserDeletionById(id, delit);
}

async function getGamesByUserId(userId) {
  const result = await userModel.getGamesByUserId(userId);
  return result;
}

async function addGameToUser(userId, jogoId) {
  try {
    if (!userId || !jogoId) throw new Error('400|userId e jogoId são obrigatórios.');
    await userModel.addGameToUser(userId, jogoId);
  } catch (error) {
    throw new Error('409|Usuário já possui este jogo.');
  }
}

async function removeGameFromUser(userId, jogoId) {
  await userModel.removeGameFromUser(userId, jogoId);
}

module.exports = {
  login,
  getUser,
  createUser,
  updateUser,
  deleteUserById,
  logicalUserDeletionById,
  getGamesByUserId,
  addGameToUser,
  removeGameFromUser,
}