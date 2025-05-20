const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  url: { type: String, required: true },
  descricao: { type: String },
  palavrasChave: [{ type: String }]
});

const Website = mongoose.model('Website', WebsiteSchema);

module.exports = Website;
