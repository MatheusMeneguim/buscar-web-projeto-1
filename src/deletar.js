require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const connectDB = require('./database/mongo');
const Website = require('./models/Website');

async function deletarPorId() {
  await connectDB();

  const id = '68435a014682bb9906def51d';

  try {
    const resultado = await Website.findByIdAndDelete(id);

    if (!resultado) {
      const erroMsg = `[${new Date().toISOString()}] Website com ID ${id} não encontrado para deletar\n`;
      fs.appendFileSync('logs/erros.log', erroMsg);
      console.log('Website não encontrado.');
    } else {
      console.log('Website deletado:\n', resultado);
    }
  } catch (erro) {
    const erroMsg = `[${new Date().toISOString()}] ${erro.message}\n`;
    fs.appendFileSync('logs/erros.log', erroMsg);
    console.error('Erro ao deletar:', erro.message);
  }

  mongoose.disconnect();
}

deletarPorId();
