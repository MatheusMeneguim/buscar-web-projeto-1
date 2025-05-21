const Website = require('../models/Website');
const fs = require('fs');

// Rota de busca por palavra-chave
const buscarPorPalavraChave = async (req, res) => {
  const termo = req.query.termo;

  if (!termo) {
    fs.appendFileSync(
      'logs/erros.log',
      `[${new Date().toISOString()}] Erro: parâmetro "termo" ausente na rota /buscar\n`
    );
    return res.status(400).json({ erro: 'Parâmetro "termo" é obrigatório' });
  }

  try {
    const resultados = await Website.find({ palavrasChave: termo });

    if (resultados.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum site encontrado com esse termo.' });
    }

    res.status(200).json(resultados);
  } catch (erro) {
    fs.appendFileSync('logs/erros.log', `[${new Date().toISOString()}] ${erro.message}\n`);
    res.status(500).json({ erro: 'Erro ao buscar websites.' });
  }
};


// Rota para deletar por ID
const deletarWebsite = async (req, res) => {
  const { id } = req.params;

  try {
    const resultado = await Website.findByIdAndDelete(id);

    if (!resultado) {
      return res.status(404).json({ mensagem: 'Website não encontrado.' });
    }

    res.status(200).json({ mensagem: 'Website deletado com sucesso!' });
  } catch (erro) {
    fs.appendFileSync('logs/erros.log', `[${new Date().toISOString()}] ${erro.message}\n`);
    res.status(500).json({ erro: 'Erro ao deletar website.' });
  }
};

module.exports = {
  buscarPorPalavraChave,
  deletarWebsite
};
