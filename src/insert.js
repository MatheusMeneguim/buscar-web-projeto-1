require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./database/mongo');
const Website = require('./models/Website');
const Usuario = require('./models/Usuario');
const Categoria = require('./models/Categoria');

async function inserirDireto() {
  await connectDB();

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

  console.log('Website inserido:\n', website);
  mongoose.disconnect();
}

inserirDireto();
