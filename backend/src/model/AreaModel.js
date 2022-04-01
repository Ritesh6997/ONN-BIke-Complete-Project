const mongoose=require("mongoose");

const areaSchema=new mongoose.Schema({
    stop:{type:String,required:true},
    stop_landmark:{type:String,required:true},
    cityId:{type:mongoose.Schema.Types.ObjectId,
        ref:"city",
        required:true}
},{
    versionKey:false,
    timestamps:true,
});

const Area=mongoose.model("area",areaSchema);
 
module.exports=Area;