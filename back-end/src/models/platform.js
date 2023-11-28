const connection = require('./connection');

async function insertPlatform(data) {
  return new Promise(function (resolve, reject) {
    const { nome } = data;
    const query = 'INSERT INTO Plataforma (nome) VALUES (?)'
    connection.query(query, [nome], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

async function updatePlatform(id, data) {
  return new Promise((resolve, reject) => {
    const { nome } = data;
    const query = `
      UPDATE Plataforma SET nome = ? WHERE id = ?
    `;
    connection.query(query, [nome, id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.affectedRows > 0) {
          resolve(results);
        } else {
          reject(new Error('Nenhuma Plataforma encontrado para atualização'));
        }
      }
    });
  });
}

async function deletePlatform(gameId) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Plataforma WHERE id = ?';
    connection.query(query, [gameId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.affectedRows > 0) {
          resolve('Plataforma deletado com sucesso');
        } else {
          reject(new Error('Nenhuma Plataforma encontrado para exclusão'));
        }
      }
    });
  });
}

async function getAllPlatform() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Plataforma';
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  insertPlatform,
  updatePlatform,
  deletePlatform,
  getAllPlatform,
}
