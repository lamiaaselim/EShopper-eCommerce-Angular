const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, enum: ['Men', 'Women', 'Children', 'Accessories', 'Shoes', 'Bags'], required: true },
    image: {type: String, required: true}
}); 

//Collection
module.exports=mongoose.model('Category', CategorySchema);
