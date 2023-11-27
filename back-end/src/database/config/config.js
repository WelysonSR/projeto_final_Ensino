const config = {
  username: 'root',
  password: '123456',
  database: 'dev_games',
  host: 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};