const mongoose = require('mongoose');


const ColorSchema = new mongoose.Schema({

    colorId: { type: Number, required: true, unique: true },
    name: { type: String, required: true},
    code: { type: String, required: true },
}); 

//Collection
module.exports=mongoose.model('color', ColorSchema);