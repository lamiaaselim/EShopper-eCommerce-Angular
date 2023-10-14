const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    productId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    category: { type: String, enum: ['men', 'women', 'children'], required: true },
    colors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Color' }],
    sizes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Size' }],
}); 

//Collection
module.exports=mongoose.model('product', ProductSchema);
