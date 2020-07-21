const express = require("express");
const mongoose = require("mongoose");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get('/products', ProductController.index);
routes.get('/', (req, res) => {
  res.send("Teste!");
});

module.exports = routes;