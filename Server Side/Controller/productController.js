const ProductSchema = require('./../Model/productModel');


exports.getAllProduct=(request, response, next)=>{
    ProductSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 

exports.getProductById=(request, response, next)=>{
    ProductSchema.findOne({_id:request.params.id})
        .then((data) => {
            if (data == null)
            throw new Error ("Product dosen't exist")
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.addProduct=(request, response, next)=>{
    let newProduct = new ProductSchema({
        _id:request.body.id,
        name:request.body.name,
    });
    newProduct.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newProduct:data });
        })
        .catch((error)=>{next(error)});
}

exports.updateProduct=(request, response, next)=>{
    ProductSchema.updateOne({
        _id:request.body.id,
    },{
        $set:{name:request.body.name}
    })
        .then((data) => {
            response.status(200).json({data:"product updated successfully"});
        }).catch((error) => {
            next(error)
        });
}

exports.deleteProduct=(request, response, next)=>{
    const productId = request.params.id; // Assuming the ID is passed as a URL parameter

    ProductSchema.findByIdAndDelete(productId)
        .then((deletedProduct) => {
            if (!deletedProduct) {
                throw new Error("Product not found");
            }
            response.status(200).json({ message: "Product deleted successfully" });
        })
        .catch((error) => {
            next(error);
        });

    // console.log(request.body)
    // response.status(200).json({data: "product deleted successfully"});
}

