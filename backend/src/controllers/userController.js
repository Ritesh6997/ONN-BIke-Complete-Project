const express=require("express");
const User = require("../model/user");
const router=express.Router();
const authentication=require("../middleware/authenticaation");


router.get("/:id",authentication,async (req,res)=>{
    try {
        const user=await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

module.exports=router;