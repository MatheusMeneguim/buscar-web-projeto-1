const connectDB = require('./database/mongo');
const Website = require('./models/Website');
const Usuario = require('./models/Usuario');
const Categoria = require('./models/Categoria');

async function iniciarProjeto() {
  try {
    await connectDB();
    console.log('Conectado ao MongoDB');

    const websites = await Website.find();
    console.log('Websites cadastrados:');
    console.log(websites);

    const usuarios = await Usuario.find();
    console.log('Usuários cadastrados:');
    console.log(usuarios);

    const categorias = await Categoria.find();
    console.log('Categorias cadastradas:');
    console.log(categorias);

  } catch (erro) {
    console.error('Erro ao iniciar o projeto:', erro.message);
  }
}

iniciarProjeto();
