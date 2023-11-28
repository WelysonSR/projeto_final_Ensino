const connection = require('./connection');

async function insertGame(game) {
  return new Promise(function (resolve, reject) {
    const { nome, cat, plataforma_que, nota, status, recomendacao, plataforma_disp } = game;
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

async function updateGame(gameId, game) {
  return new Promise((resolve, reject) => {
    const { nome, cat, plataforma_que, nota, status, recomendacao, plataforma_disp } = game;
    const query = `
      UPDATE Jogo SET nome = ?, cat = ?, plataforma_que = ?, nota = ?, status = ?, recomendacao = ?, plataforma_disp = ? WHERE id = ?
    `;
    connection.query(query, [nome, cat, plataforma_que, nota, status, recomendacao, plataforma_disp, gameId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.affectedRows > 0) {
          resolve(results);
        } else {
          reject(new Error('Nenhum jogo encontrado para atualização'));
        }
      }
    });
  });
}

async function deleteGame(gameId) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Jogo WHERE id = ?';
    connection.query(query, [gameId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.affectedRows > 0) {
          resolve('Jogo deletado com sucesso');
        } else {
          reject(new Error('Nenhum jogo encontrado para exclusão'));
        }
      }
    });
  });
}

async function getAllGames() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Jogo';
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

async function getPlatformByGames(idGame) {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT P.nome AS nome_plataforma
      FROM Jogo_Plataforma JP
      INNER JOIN Plataforma P ON JP.id_plataforma = P.id
      WHERE JP.id_jogo = ?
    `;

    connection.query(query, [idGame], (err, results) => {
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
  updateGame,
  deleteGame,
  getAllGames,
  getPlatformByGames,
}