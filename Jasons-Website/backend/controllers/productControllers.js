const express = require('express')
const Product = require('../Schema/productSchema');
const { findOneAndDelete } = require('../Schema/User');
const router = express.Router()

exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find({})
        res.json(products)
    } catch(err){
        res.status(500).json({message: err.message})
    }
};

exports.createNewProduct = async (req, res)=>{
    const product = new Product({
        product: req.body.product,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
    })
    try{
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}


exports.deleteAProduct = async (req, res) => {
  try {
    // Extract the product ID from the request body
    const productId = req.body.productId;

    // Check if productId is provided
    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    // Find and remove the product from the database using its ID
    const removedProduct = await Product.findOneAndDelete({ _id: productId });

    // If no product is found with the given ID
    if (!removedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Respond with success message and the removed product data
    return res.status(200).json({ message: 'Product removed successfully', removedProduct });
  } catch (error) {
    // Handle errors and respond with error message
    return res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};
