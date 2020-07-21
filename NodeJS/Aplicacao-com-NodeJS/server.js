const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
requireDir("./src/models");    //Usando o require-dir para buscar todos os Requires necessários.

// Referenciando Product
const Product = mongoose.model('Product');

// Primeira Rota
app.get('/', ( req, res ) => {
    Product.create({
        title: 'JavaScript',
        description: 'My new favorite programming language',
        url: 'https://github.com/Dario-Felipe'
    },
    {
        title: 'Java',
        description: 'Mys new favorite programming language',
        url: 'https://github.com/Dario-Felipe'
    });
    return res.send("Hello, world!!");
});

// Pedindo para que o App fique na porta 3001
app.listen(3001);