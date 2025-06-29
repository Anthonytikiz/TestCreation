const db = require('../config/db');

const User = {
  create: (username,email,password, callback) => {
    db.query('INSERT INTO users (username,email,password) VALUES (?,?,?)', [username,email,password], callback);
  },
  getAll: (callback) => {
    db.query('SELECT * FROM users', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  },
  update: (id, username, email, password, callback) => {
    db.query('UPDATE users SET username = ? and email = ? and password = ? WHERE id = ?', [username, email, password, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
  }
};

module.exports = User;