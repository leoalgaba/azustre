'use strict'

const express = require('express');
// *** EXPORTACIONES ***
const ProductCtrl = require('../controllers/product');
const api = express.Router()

// REST FULL METODO GET,POST,PUT,DELETE
api.get('/product', ProductCtrl.getProducts)
api.get('/product/:productId', ProductCtrl.getProduct)
api.post('/product', ProductCtrl.saveProduct)
api.put('/product/:productId', ProductCtrl.updateProduct)
api.delete('/product/:productId', ProductCtrl.deleteProduct)

module.exports = api