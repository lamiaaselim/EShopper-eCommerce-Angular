const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }],
    totalPrice: { type: Number, required: true },
    shippingAddress: { type: String, required: true },
    orderStatus: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' },
});

//Collection
module.exports = mongoose.model('order', OrderSchema);