const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            color: { type: mongoose.Schema.Types.ObjectId, ref: 'Color', required: true },
            size: { type: mongoose.Schema.Types.ObjectId, ref: 'Size', required: true }
        }
    ],
    total: { type: Number, required: true }, // Total price of the items in the cart
});



//Collection
module.exports = mongoose.model('cart', CartSchema);