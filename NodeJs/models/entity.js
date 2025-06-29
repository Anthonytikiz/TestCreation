const db = require('../config/db');

const Entity = {
  create: (name, callback) => {
    db.query('INSERT INTO entities (name) VALUES (?)', [name], callback);
  },
  getAll: (callback) => {
    db.query('SELECT * FROM entities', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM entities WHERE id = ?', [id], callback);
  },
  update: (id, name, callback) => {
    db.query('UPDATE entities SET name = ? WHERE id = ?', [name, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM entities WHERE id = ?', [id], callback);
  }
};

module.exports = Entity;