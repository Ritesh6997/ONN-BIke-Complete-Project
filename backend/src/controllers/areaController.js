const express = require('express');

const Area = require("../model/AreaModel")

const router=express.Router()
const  City=require("../model/cityModel");
router.post("",async(req,res)=>{

    try{
     const area = await Area.create(req.body)

     return res.status(201).send(area);
    }catch(err){
        return res.status(400).send({message:err.message})
    }
});
router.get("/:Name",async(req,res)=>{
    try{
        const city=await City.findOne({city:req.params.Name}).lean().exec();
        let cityID=city._id;
        const area= await Area.find({cityId:cityID}).lean().exec();
        return res.status(200).send({areas:area});
    }
    catch(err){
        return res.status(500).send({message:err})
    }
})

module.exports =router;