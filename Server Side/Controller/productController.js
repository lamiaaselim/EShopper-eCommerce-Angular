

exports.getAllProduct=(request, response, next)=>{
    console.log(request.url)
    response.status(200).json({data: [{id:1 , name:"ABC"},{id:2 , name:"XXX"}]});
}
 
exports.getProductById=(request, response, next)=>{
    response.status(200).json({data: {id:request.params.id}});
}

exports.addProduct=(request, response, next)=>{
    console.log(request.body)
    response.status(201).json({data: "product added successfully"});
}

exports.updateProduct=(request, response, next)=>{
    console.log(request.body)
    response.status(200).json({data: "product updated successfully"});
}

exports.deleteProduct=(request, response, next)=>{
    console.log(request.body)
    response.status(200).json({data: "product deleted successfully"});
}