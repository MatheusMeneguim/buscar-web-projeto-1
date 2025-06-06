require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const connectDB = require('./database/mongo');
const Website = require('./models/Website');
const Usuario = require('./models/Usuario');
const Categoria = require('./models/Categoria');

async function inserirDireto() {
  await connectDB();

  try {
    const usuario = await Usuario.create({
      nome: 'Matheus Meneguim',
      email: 'matheus@email.com'
    });

    const categoria = await Categoria.create({
      nome: 'Moda',
      descricao: 'Lojas de roupas e acessórios'
    });

    const website = await Website.create({
      titulo: 'Loja Yes',
      url: 'https://instagram.com/lojayes',
      descricao: 'Moda feminina em Ourinhos',
      palavrasChave: ['moda', 'ourinhos', 'feminina'],
      usuarioId: usuario._id,
      categoriaId: categoria._id
    });

    const usuario2 = await Usuario.create({
      nome: 'Murilo Silva',
      email: 'murilo@email.com'
    });

    const categoria2 = await Categoria.create({
      nome: 'Tecnologia',
      descricao: 'Sites de tecnologia e inovação'
    });

    const website2 = await Website.create({
      titulo: 'Tech News',
      url: 'https://technews.com',
      descricao: 'Notícias de tecnologia',
      palavrasChave: ['tecnologia', 'inovação', 'notícias'],
      usuarioId: usuario2._id,
      categoriaId: categoria2._id
    });

    console.log('Websites inseridos com sucesso:');
    console.log(website);
    console.log(website2);
  } catch (erro) {
    const erroMsg = `[${new Date().toISOString()}] Erro ao inserir dados: ${erro.message}\n`;
    fs.appendFileSync('logs/erros.log', erroMsg);
    console.error('Erro na inserção:', erro.message);
  }

  mongoose.disconnect();
}

inserirDireto();
