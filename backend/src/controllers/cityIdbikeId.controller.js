const express = require('express');

const CityId_BikeId = require("../model/CityId_bikeId");
const City=require("../model/cityModel");
const router=express.Router()

router.post("",async(req,res)=>{

    try{
     const cityId_bikeId = await CityId_BikeId.create(req.body);

     return res.status(201).send(cityId_bikeId);
    }catch(err){
        return res.status(400).send({message:err.message})
    }
});

router.get ("/:Name", async(req,res)=>{   
    try {
        const city=await City.findOne({city:req.params.Name}).lean().exec();
        let cityID=city._id;
        const bikes=await CityId_BikeId.findOne({cityId:cityID}).populate({
            path:"bikeId"
        }).populate({
            path:"cityId"
        }).lean().exec();
        return res.status(200).send({message:bikes})
    } catch (error) {
        return res.status(500).send({message:error})
    }
})


module.exports =router;