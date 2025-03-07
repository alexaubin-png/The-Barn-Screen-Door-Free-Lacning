const express = require('express')
const Product = require('../Schema/productSchema')
const { createNewProduct, getAllProducts, deleteAProduct} = require('../controllers/productControllers');  // Import 
const router = express.Router()

router.get('/products', getAllProducts)
router.post('/createNewProduct', createNewProduct)
router.delete('/deleteProduct', deleteAProduct)
module.exports = router