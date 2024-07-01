const Product = require('../models/Product');

let products = [];
let nextId = 1;

// Récupérer tous les produits
const getAllProducts = (req, res) => {
  res.json(products);
};

// Récupérer un produit par son ID
const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
};

// Créer un nouveau produit
const createProduct = (req, res) => {
  const { name, price } = req.body;
  const product = new Product(nextId++, name, price);
  products.push(product);
  res.status(201).json(product);
};

// Mettre à jour un produit existant
const updateProduct = (req, res) => {
  let productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).send('Product not found');
  products[productIndex].name = req.body.name || products[productIndex].name;
  products[productIndex].price = req.body.price || products[productIndex].price;
  res.json(products[productIndex]);
};

// Supprimer un produit
const deleteProduct = (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
