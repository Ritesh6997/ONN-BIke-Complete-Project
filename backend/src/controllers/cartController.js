const express=require("express");
const router=express.Router();
const Cart=require("../model/cart");
router.post("",async(req,res)=>{
    try {
        cart=await Cart.create(req.body);
        return res.status(201).send(cart);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

router.get("/:id",async(req,res)=>{
    try {
        const cart=await Cart.findOne({userId:req.params.id}).populate({
            path:"userId",
        }).lean().exec();
        return res.status(201).send(cart);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});
