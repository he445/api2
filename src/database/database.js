const mongoose = require('mongoose');

const connectDatabase = () => {
  console.log('Conectando ao banco de dados...');

  mongoose
    .connect( "mongodb+srv://admin:<admin>@api2.7kp4dxk.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Conectado!'))
    .catch((err) => console.log(`Erro ao conectar com o banco: ${err}`));
};

module.exports = connectDatabase;
