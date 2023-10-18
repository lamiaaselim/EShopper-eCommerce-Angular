const StockSchema = require('./../Model/stockModel');

exports.getAllStock=(request, response, next)=>{
    StockSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 


exports.addStock=(request, response, next)=>{
    let newStock = new StockSchema({
        stockId: request.body.stockId ,
        product:request.body.product,
        stocks: request.body.stocks,
    });
    newStock.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newStock:data });
        })
        .catch((error)=>{next(error)});
}
