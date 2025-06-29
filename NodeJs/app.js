const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
app.use(cors())

app.use(bodyParser.json());

app.use('/entities', require('./routes/entityRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/user-entities', require('./routes/userEntityRoutes'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
