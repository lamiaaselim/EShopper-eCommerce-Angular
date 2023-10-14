const mongoose = require('mongoose');


const StockSchema = new mongoose.Schema({
    stockId: { type: Number, required: true, unique: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    stocks: [
        {
            color: { type: mongoose.Schema.Types.ObjectId, ref: 'Color', required: true },
            size: { type: mongoose.Schema.Types.ObjectId, ref: 'Size', required: true },
            quantity: { type: Number, required: true },
        }
    ]
}); 

//Collection
module.exports=mongoose.model('stock', StockSchema);
