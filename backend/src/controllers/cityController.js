const express = require('express');

const City = require("../model/cityModel")

const router=express.Router()

router.post("",async(req,res)=>{

    try{
     const city = await City.create(req.body)

     return res.status(201).send(city);
    }catch(err){
        return res.status(400).send({message:err.message})
    }
})


module.exports =router;