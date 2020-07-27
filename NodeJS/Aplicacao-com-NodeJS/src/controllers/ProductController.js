//Importações
const mongoose = require("mongoose");
const Product = mongoose.model("Product");

//Exportando funções a seram utilizadas
module.exports = {
  async index(req, res) {
    const products = await Product.find();    // Mostrar todos
    return res.json(products);
  },
  async store(req, res) {
    const product = await Product.create( req.body );   // Adicionar Elemento
    return res.json(product);
  },
  async show(req, res) {
    const product = await Product.findById( req.params.id );    // Mostrar por ID
    return res.json(product);
  },
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Update por ID
    return res.json(product);
  },
  async delete(req, res) {
    await Product.findByIdAndRemove( req.params.id );   // Deletar por ID
    return res.send("Removido com Sucesso!");
  }
}
