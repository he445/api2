require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDatabase = require('./src/database/database.js');
const userRoute = require('./src/routes/UserRouter.js');
const authRoute = require('./src/routes/auth.route');
const swaggerRoute = require('./src/routes/swagger.route');

const CharacterRoute = require('./src/routes/character.route');
const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());

app.use(cors());
app.use('/auth', authRoute);
app.use('/characters', CharacterRoute);
app.use('/users', userRoute);
app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
