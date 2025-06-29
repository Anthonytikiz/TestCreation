const db = require('../config/db');

const UserEntity = {
  create: (userId, entityId, callback) => {
    db.query('INSERT INTO user_entities (userId, entityId) VALUES (?, ?)', [userId, entityId], callback);
  },

  getAll: (callback) => {
    db.query(
      `SELECT ue.id, ue.userId, u.username, ue.entityId, e.name AS entityName 
       FROM user_entities ue 
       JOIN users u ON ue.userId = u.id 
       JOIN entities e ON ue.entityId = e.id`,
      callback
    );
  },

  getById: (id, callback) => {
    db.query(
      `SELECT ue.id, ue.userId, u.username, ue.entityId, e.name AS entityName 
       FROM user_entities ue 
       JOIN users u ON ue.userId = u.id 
       JOIN entities e ON ue.entityId = e.id 
       WHERE ue.id = ?`,
      [id],
      callback
    );
  },

  update: (id, userId, entityId, callback) => {
    db.query('UPDATE user_entities SET userId = ?, entityId = ? WHERE id = ?', [userId, entityId, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM user_entities WHERE id = ?', [id], callback);
  }
};

module.exports = UserEntity;
