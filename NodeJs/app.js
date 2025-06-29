const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/entities', require('./routes/entityRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/user-entities', require('./routes/userEntityRoutes'));

// Serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
