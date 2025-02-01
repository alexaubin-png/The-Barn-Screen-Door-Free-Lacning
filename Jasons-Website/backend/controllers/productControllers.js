const express = require('express')
const Product = require('../Schema/productSchema')
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