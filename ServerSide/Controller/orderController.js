const OrderSchema = require('./../Model/orderModel');

exports.getAllOrders=(request, response, next)=>{
    OrderSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 


exports.addOrder=(request, response, next)=>{
    let newOrder = new OrderSchema({
        user: request.body.user ,
        items:request.body.items,
        totalPrice: request.body.totalPrice,
        shippingAddress: request.body.shippingAddress,
        orderStatus: request.body.orderStatus,
    });
    newOrder.save()
        .then((data) => {
            response.status(201).json({data:"order added successfully",newOrder:data });
        })
        .catch((error)=>{next(error)});
}
