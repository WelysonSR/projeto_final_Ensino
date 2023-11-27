const connection = require('./connection');

async function getUser(user) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Users WHERE user = ?';
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

async function deleteUser(userId) {
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

module.exports = {
  getUser, insertUser, patchUser, deleteUser
};