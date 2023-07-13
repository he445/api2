const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API de Gerenciamento de Influenciadores',
    description:
      'Documentação gerada automaticamente pelo módulo <b>swagger-autogen</b>',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'API local',
    },
  ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];
swaggerAutogen(outputFile, endpointsFiles, doc);

require('./index');
