require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./database/mongo');

const Usuario = require('./models/usuario');
const Categoria = require('./models/categoria');
const Website = require('./models/Website');

async function executarTestes() {
  try {
    await connectDB();

    await Usuario.deleteMany();
    await Categoria.deleteMany();
    await Website.deleteMany();

    const usuario = await Usuario.create({
      nome: 'Matheus Faustino',
      email: 'matheus@email.com'
    });

    const categoria = await Categoria.create({
      nome: 'Moda Feminina',
      descricao: 'Lojas voltadas ao público feminino'
    });

    const website = await Website.create({
      titulo: 'Loja Yes',
      url: 'https://instagram.com/lojayes',
      descricao: 'Moda feminina em Ourinhos',
      palavrasChave: ['moda', 'feminina', 'ourinhos', 'loja'],
      usuarioId: usuario._id,
      categoriaId: categoria._id
    });

    console.log('\nUsuário inserido:\n', usuario);
    console.log('\nCategoria inserida:\n', categoria);
    console.log('\nWebsite inserido:\n', website);

    mongoose.disconnect();
  } catch (erro) {
    console.error('Erro ao executar testes:', erro.message);
  }
}

executarTestes();
