const {Schema}=require('mongoose');
const OrderSchema=new Schema({
    name: String,
    qty: Number,
    price: String,
    mode: String,
})
module.exports=OrderSchema;