const express = require('express');
const app = express();

const productRoutes = require('./API/routes/products');

app.use('/products', productRoutes);

module.exports = app;