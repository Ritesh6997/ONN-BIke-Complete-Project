const mongoose=require("mongoose");
const cityId_bikeIdSchema=new mongoose.Schema({
    bikeId:[{type:mongoose.Schema.Types.ObjectId,ref:"product"}],
    cityId:{type:mongoose.Schema.Types.ObjectId,ref:"city"}
},{
    versionKey:false,
    timestamps:true,
});

const CityId_BikeId= mongoose.model("cityId_bikeId",cityId_bikeIdSchema);
module.exports=CityId_BikeId;