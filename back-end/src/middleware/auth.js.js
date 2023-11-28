const jwt = require('jsonwebtoken');

const jwtKey = 'minha_senha';

const auth = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) throw new Error('404|Token não encontrado!');

  try {
    jwt.verify(token, jwtKey);
    next();
  } catch (error) {
    throw new Error('401|Token inválido!');
  }
};

module.exports = auth;