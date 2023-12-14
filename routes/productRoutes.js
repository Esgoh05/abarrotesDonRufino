const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.post('/products', (productController.createProduct))
router.get('/products/:idProduct', (productController.findOneProduct))
router.get('/products', (productController.findAllProducts))


module.exports = router

