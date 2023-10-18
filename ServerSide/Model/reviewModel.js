const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema({
    reviewId: { type: Number, required: true},
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },

});

//Collection
module.exports=mongoose.model('review', ReviewSchema);