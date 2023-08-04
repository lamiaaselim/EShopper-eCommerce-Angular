const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    // _id:Number,
    name:String,
    rating:Number,
    newPrice:Number,
    oldPrice:Number,
    description:String,
    category:Array,
    information:String,
    size:Array,
    color:Array,
    quantity:Number,
});

//Collection
module.exports=mongoose.model('product', ProductSchema);