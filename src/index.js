const express = require('express');
const connectDB = require('./database/mongo');
const { buscarPorPalavraChave, deletarWebsite } = require('./controllers/websiteController');
const app = express();

// Permite o uso de JSON no corpo das requisições
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});

// Rotas reais do projeto
app.get('/buscar', buscarPorPalavraChave);
app.delete('/deletar/:id', deletarWebsite);

// Conecta ao MongoDB
connectDB();

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
