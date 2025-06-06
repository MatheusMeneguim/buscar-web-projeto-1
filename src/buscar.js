require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./database/mongo');
const Website = require('./models/Website');

async function buscarPorTermo() {
  await connectDB();

  const termo = 'moda'; 

  try {
    const resultados = await Website.find({
      palavrasChave: { $regex: termo, $options: 'i' }
    });

    if (resultados.length === 0) {
      console.log('Nenhum resultado encontrado.');
    } else {
      console.log('Resultados encontrados:\n', resultados);
    }
  } catch (erro) {
    console.error('Erro na busca:', erro.message);
  }

  mongoose.disconnect();
}

buscarPorTermo();
