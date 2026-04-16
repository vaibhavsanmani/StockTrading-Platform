const mongoose=require('mongoose');

const OrdersSchema=require('../schema/OrdersSchema');

const OrdersModel=new mongoose.model("Orders",OrdersSchema);

module.exports=OrdersModel;
