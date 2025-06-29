const User = require('../models/user');

exports.create = (req, res) => {
  const { username, email, password } = req.body;
  if (!username) return res.status(400).json({ error: 'username is required' });
  if (!email) return res.status(400).json({ error: 'email is required' });
  if (!password) return res.status(400).json({ error: 'password is required' });

  User.create(username, email, password, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, username, email, password });
  });
};

exports.getAll = (req, res) => {
  User.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  User.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(results[0]);
  });
};

exports.update = (req, res) => {
  const { username, email, password } = req.body;
  User.update(req.params.id, username, email, password, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Updated' });
  });
};

exports.delete = (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Deleted' });
  });
};
