const mongoose = require('mongoose');


const SizeSchema = new mongoose.Schema({

    sizeId: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
}); 

//Collection
module.exports=mongoose.model('Size', SizeSchema);