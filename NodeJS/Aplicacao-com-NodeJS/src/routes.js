//Importações
const express = require("express");
const mongoose = require("mongoose");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

// Rotas possíveis
routes.get('/', (req, res) => {
  res.send("Teste!");
});
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

//Exportação
module.exports = routes;