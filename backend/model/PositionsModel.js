const mongoose=require("mongoose");

const PositionSchema=require('../schema/PositionsSchema');

const PositionModel= mongoose.model("Positions",PositionSchema);

module.exports= PositionModel;