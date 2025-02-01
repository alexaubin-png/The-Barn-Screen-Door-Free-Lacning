const express = require('express')
const Product = require('../Schema/productSchema')
const { createNewProduct, getAllProducts} = require('../controllers/productControllers');  // Import 
const router = express.Router()

router.get('/products', getAllProducts)
router.post('/createNewProduct', createNewProduct)

module.exports = router