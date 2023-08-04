const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id:Number,
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
})