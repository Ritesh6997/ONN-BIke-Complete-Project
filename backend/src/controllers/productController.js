const express = require("express");
const router = express.Router();
const Product = require("../model/productModel");

router.post("", async (req, res) => {
    try{
        const product = await Product.create(req.body);
        return res.status(200).send(product);
    }
    catch(err){
        return res.status(400).send({message : err.message});
    }
 
});

router.get("", async (req, res) => {
    try{
        const product = await Product.find().lean().exec();
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
});

module.exports = router;