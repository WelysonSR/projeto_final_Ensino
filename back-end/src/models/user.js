const connection = require('./connection');

async function getUser(user) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Users WHERE user = ? AND  userExit = true';
    connection.query(query, [user], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
}

async function insertUser(data) {
  return new Promise((resolve, reject) => {
    const { user, firstName, lastName, email, password } = data;
    const query = 'INSERT INTO Users (user, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)';

    connection.query(query, [user, firstName, lastName, email, password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

async function patchUser(id, updateUser) {
  return new Promise((resolve, reject) => {
    const {
      user, firstName, lastName, email, password
    } = updateUser
    const query = 'UPDATE Users SET user = ?, firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?';
    connection.query(query, [user, firstName, lastName, email, password, id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.affectedRows > 0) {
          resolve(results[0]);
        } else {
          reject(new Error('Nenhum usuário encontrado para atualização'));
        }
      }
    });
  });
}

async function deleteUserById(userId) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Users WHERE id = ?';

    connection.query(query, [userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.affectedRows > 0) {
          resolve();
        } else {
          reject(new Error('Nenhum usuário encontrado para deleção'));
        }
      }
    });
  });
}

async function logicalUserDeletionById(id, delit) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE Users SET userExit = ? WHERE id = ?';
    connection.query(query, [delit, id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.affectedRows > 0) {
          resolve(results[0]);
        } else {
          reject(new Error('Nenhum usuário encontrado para atualização'));
        }
      }
    });
  });
}

function getGamesByUserId(userId) {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT Jogo.*
      FROM Jogo
      INNER JOIN User_Jogo ON Jogo.id = User_Jogo.jogoId
      WHERE User_Jogo.userId = ?;
    `;

    connection.query(query, [userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

function addGameToUser(userId, jogoId) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO User_Jogo (userId, jogoId) VALUES (?, ?)';

    connection.query(query, [userId, jogoId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

function removeGameFromUser(userId, jogoId) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM User_Jogo WHERE userId = ? AND jogoId = ?';

    connection.query(query, [userId, jogoId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  getUser,
  insertUser,
  patchUser,
  deleteUserById,
  logicalUserDeletionById,
  getGamesByUserId,
  addGameToUser,
  removeGameFromUser,
};