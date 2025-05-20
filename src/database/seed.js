const mongoose = require('mongoose');
require('dotenv').config();

const Website = require('../models/Website');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao MongoDB');

    await Website.deleteMany(); // Limpa a coleção

    await Website.insertMany([
      {
        titulo: 'Wikipedia',
        url: 'https://www.wikipedia.org',
        descricao: 'Enciclopédia livre e colaborativa',
        palavrasChave: ['educação', 'informação', 'enciclopédia']
      },
      {
        titulo: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        descricao: 'Documentação para desenvolvedores web',
        palavrasChave: ['html', 'css', 'javascript', 'documentação']
      },
      {
        titulo: 'GitHub',
        url: 'https://github.com',
        descricao: 'Hospedagem de código-fonte',
        palavrasChave: ['código', 'repositório', 'projetos']
      }
    ]);

    console.log('Dados inseridos com sucesso!');
    process.exit();
  } catch (error) {
    console.error('Erro ao inserir dados:', error.message);
    process.exit(1);
  }
};

connectDB();
