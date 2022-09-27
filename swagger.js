const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description:
      'Documentation automatically generated by the <b>swagger-autogen</b> module',
  },

  info: {
    title: 'API diario',
    description: 'API para projeto fullstack diario da loucura',
    contact: {
      email: 'everton.f.silva0@gmail.com',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'API de teste',
    },
    {
      url: 'https://diarioapi.onrender.com/',
      description: 'API de produção',
    },
  ],
  basePath: '/',
  schemes: ['https', 'http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];
swaggerAutogen(outputFile, endpointsFiles, doc);

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index');
});
