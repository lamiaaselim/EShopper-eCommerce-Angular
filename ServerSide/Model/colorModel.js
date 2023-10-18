const mongoose = require('mongoose');


const ColorSchema = new mongoose.Schema({

    colorId: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
}); 

//Collection
module.exports=mongoose.model('color', ColorSchema);