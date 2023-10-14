const SizeSchema = require('./../Model/sizeModel');


exports.getAllSizes=(request, response, next)=>{
    SizeSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 



exports.addSize=(request, response, next)=>{
    let newSize = new SizeSchema({
        
        sizeId:request.body.sizeId,
        name:request.body.name,
    });
    newSize.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newSize:data });
        })
        .catch((error)=>{next(error)});
}


