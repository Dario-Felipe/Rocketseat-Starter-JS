//Importações
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");    //Usando o require-dir para buscar todos os Requires necessários.

//Rotas
app.use('/api', require("./src/routes"));

// Pedindo para que o App fique na porta 3001
app.listen(3001);