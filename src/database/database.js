const mongoose = require('mongoose');

const connectDatabase = () => {
  console.log('Conectando ao banco de dados...');

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Conectado!'))
    .catch((err) => console.log(`Erro ao conectar com o banco: ${err}`));
};

module.exports = connectDatabase;
