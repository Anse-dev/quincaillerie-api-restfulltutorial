
const express = require('express');
const swaggerDocs = require('./swagger');
const app = express();
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);

// Middleware pour Swagger
app.use('/', swaggerDocs);

module.exports = app; 
