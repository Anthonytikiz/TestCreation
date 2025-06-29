const Entity = require('../models/entity');

exports.create = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  Entity.create(name, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, name });
  });
};

exports.getAll = (req, res) => {
  Entity.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Entity.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(results[0]);
  });
};

exports.update = (req, res) => {
  const { name } = req.body;
  Entity.update(req.params.id, name, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Updated' });
  });
};

exports.delete = (req, res) => {
  Entity.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Deleted' });
  });
};
