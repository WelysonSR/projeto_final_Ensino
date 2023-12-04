const connection = require('./connection');

async function insertGame(data) {
  return new Promise(function (resolve, reject) {
    const { nome, cat, plataforma_que, nota, status, recomendacao} = data;
    const query = 'INSERT INTO Jogo (nome, cat, plataforma_que, nota, status, recomendacao) VALUES (?, ?, ?, ?, ?, ?)'
    connection.query(query, [nome, cat, plataforma_que, nota, status, recomendacao], (err, results) => {
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
    const { nome, cat, plataforma_que, nota, status, recomendacao } = game;
    const query = 'UPDATE Jogo SET nome = ?, cat = ?, plataforma_que = ?, nota = ?, status = ?, recomendacao = ? WHERE id = ?';
    connection.query(query, [nome, cat, plataforma_que, nota, status, recomendacao, gameId], (err, results) => {
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
          console.log(`Delet erro capiturado: ${err}`);
          reject(new Error('Nenhum jogo encontrado para exclusão'));
        }
      }
    });
  });
}

async function getAllGames() {
  return new Promise((resolve, reject) => {
    const query = `SELECT
    Jogo.id,
    Jogo.nome,
    Jogo.cat,
    Jogo.nota,
    Jogo.status,
    Jogo.recomendacao,
    GROUP_CONCAT(Plataforma.nome SEPARATOR ', ') AS plataforma_disp
FROM
    Jogo
LEFT JOIN
    Jogo_Plataforma ON Jogo.id = Jogo_Plataforma.id_jogo
LEFT JOIN
    Plataforma ON Jogo_Plataforma.id_plataforma = Plataforma.id
GROUP BY
    Jogo.id`;

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
    const query =
      `SELECT P.nome AS nome_plataforma
      FROM Jogo_Plataforma JP
      INNER JOIN Plataforma P ON JP.id_plataforma = P.id
      WHERE JP.id_jogo = ?`
      ;

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
  insertGame, updateGame, deleteGame, getAllGames, getPlatformByGames
}