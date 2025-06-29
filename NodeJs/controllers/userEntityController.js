const UserEntity = require('../models/userEntity');

exports.create = (req, res) => {
  const { userId, entityId } = req.body;
  if (!userId || !entityId) return res.status(400).json({ error: 'userId and entityId are required' });

  UserEntity.create(userId, entityId, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, userId, entityId });
  });
};

exports.getAll = (req, res) => {
  UserEntity.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  UserEntity.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ error: 'Association not found' });
    res.json(results[0]);
  });
};

exports.update = (req, res) => {
  const { userId, entityId } = req.body;
  if (!userId || !entityId) return res.status(400).json({ error: 'userId and entityId are required' });

  UserEntity.update(req.params.id, userId, entityId, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Association updated' });
  });
};

exports.delete = (req, res) => {
  UserEntity.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Association deleted' });
  });
};
