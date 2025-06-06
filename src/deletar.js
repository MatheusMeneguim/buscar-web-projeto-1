require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./database/mongo');
const Website = require('./models/Website');

async function deletarPorId() {
  await connectDB();

  const id = '68435a014682bb9906def51d'; 

  try {
    const resultado = await Website.findByIdAndDelete(id);

    if (!resultado) {
      console.log('Website não encontrado.');
    } else {
      console.log('Website deletado:\n', resultado);
    }
  } catch (erro) {
    console.error('Erro ao deletar:', erro.message);
  }

  mongoose.disconnect();
}

deletarPorId();
