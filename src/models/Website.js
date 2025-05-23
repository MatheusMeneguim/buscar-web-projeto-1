const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  url: { type: String, required: true },
  descricao: { type: String },
  palavrasChave: [{ type: String }],
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }
});

const Website = mongoose.model('Website', WebsiteSchema);


module.exports = Website;
