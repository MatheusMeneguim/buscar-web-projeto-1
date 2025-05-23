const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: String
});

const Categoria = mongoose.model('Categoria', CategoriaSchema);
module.exports = Categoria;
