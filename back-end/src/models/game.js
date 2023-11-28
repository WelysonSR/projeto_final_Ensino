const connection = require('./connection');

async function insertGame(data) {
  return new Promise(function (resolve, reject) {
    const { nome, cat, plataforma_que, nota, status, recomendacao, plataforma_disp } = data;
    const query = 'INSERT INTO Jogo (nome, cat, plataforma_que, nota, status, recomendacao, plataforma_disp) VALUES (?, ?, ?, ?, ?, ?, ?)'
    connection.query(query, [nome, cat, plataforma_que, nota, status, recomendacao, plataforma_disp], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}



module.exports = {
  insertGame,
}