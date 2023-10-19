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
    ProductSchema.findOne({productId:request.params.id})
        .populate('sizes')
        .populate('colors')
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
        // _id:request.body.id,
        productId: request.body.productId ,
        name:request.body.name,
        description: request.body.description,
        image: request.body.image,
        price: request.body.price,
        oldPrice: request.body.price,
        category: request.body.category,
        colors: request.body.colors, 
        sizes: request.body.sizes,
    });
    newProduct.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newProduct:data });
        })
        .catch((error)=>{next(error)});
}

exports.updateProduct = (request, response, next) => {
    ProductSchema.findOneAndUpdate(
        { productId: request.body.productId },
        { $set: { name: request.body.name } },
        { new: true } // to return the updated document
    )
    .then(updatedProduct => {
        if (updatedProduct) {
            response.status(200).json({ message: "Product updated successfully" });
        } else {
            response.status(404).json({ message: "ID doesn't exist" });
        }
    })
    .catch(error => {
        console.error("Update error: ", error);
        next(error);
    });
}

exports.deleteProduct = (request, response, next) => {
    const productId =  request.params.id;  // Assuming the ID is passed as a URL parameter

    ProductSchema.findOneAndDelete({productId:productId})
        .then((deletedProduct) => {
            if (!deletedProduct) {
                throw new Error("Product not found");
            }
            response.status(200).json({ message: "Product deleted successfully" });
        })
        .catch((error) => {
            next(error);
        });
};
