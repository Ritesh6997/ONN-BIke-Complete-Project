const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    name:{type:String,required:true},
    comp_name:{type:String,required:true}, 
    range:{type:String,required:true},
    excess:{type:String,required:true},
    daily:{type:Number,required:true},
    Weekly:{type:Number,required:true},
    monthly:{type:Number,required:true},
    count:{type:Number,required:true, default:1},
    minimum_billing:{type:String,required:false,default:"RS 100/4km"},
    type: {type:String,required:true,
    enum:["MotorCycle","Scooter"]},
    img:{type:String,required:true}
   
},
{
    versionKey:false,
    timestamps:true
});

const Product= mongoose.model("product",productSchema);

module.exports=Product;