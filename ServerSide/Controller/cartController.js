const CartSchema = require('./../Model/cartModel');


exports.getAllCartItems=(request, response, next)=>{
    CartSchema.find({})
        .populate('user')
        .populate('items.product')
        .populate('items.color')
        .populate('items.size')
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 



exports.addCartItem = (request, response, next) => {
    // Extract the user and total from the request body
    const { user, total } = request.body;
    
    // Extract the items array from the request body
    const items = request.body.items.map(item => {
        return {
            product: item.product,
            quantity: item.quantity,
            color: item.color,
            size: item.size
        };
    });

    // Create a new cart item with the extracted data
    const newCartItem = new CartSchema({
        user: user,
        items: items,
        total: total
    });

    newCartItem.save()
        .then((data) => {
            response.status(201).json({ data: "data added successfully", newCartItem: data });
        })
        .catch((error) => {
            next(error);
        });
}



