require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const connectDB = require('./database/mongo');
const Website = require('./models/Website');

async function buscarPorTermo() {
  await connectDB();

  const termo = 'moda'; 

  if (!termo) {
    const erroMsg = `[${new Date().toISOString()}] Erro: parâmetro "termo" ausente na busca\n`;
    fs.appendFileSync('logs/erros.log', erroMsg);
    console.log('Erro: termo de busca ausente. Log registrado.');
    mongoose.disconnect();
    return;
  }

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
    const erroMsg = `[${new Date().toISOString()}] ${erro.message}\n`;
    fs.appendFileSync('logs/erros.log', erroMsg);
    console.error('Erro na busca:', erro.message);
  }

  mongoose.disconnect();
}

buscarPorTermo();
