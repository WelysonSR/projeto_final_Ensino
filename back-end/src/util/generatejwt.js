const jwt = require('jsonwebtoken');

const jwtKey = 'minha_senha';

const generateJWT = (user) => {
  const { id, email} = user;
  const payload = { id, email};
  const config = { expiresIn: '1H' };
  return jwt.sign(payload, jwtKey, config);
};

module.exports = generateJWT;