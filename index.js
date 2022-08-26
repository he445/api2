require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDatabase = require('./src/database/database.js');
const userRoute = require('./src/routes/UserRouter.js');
const authRoute = require('./auth/auth.route');
const port = process.env.PORT || 3001;
const app = express();

connectDatabase();

app.use(cors());
app.use('/users', userRoute);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
