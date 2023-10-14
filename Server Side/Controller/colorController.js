const ColorSchema = require('./../Model/colorModel');


exports.getAllColors=(request, response, next)=>{
    ColorSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 



exports.addColor=(request, response, next)=>{
    let newColor = new ColorSchema({
        
        colorId:request.body.colorId,
        name:request.body.name,
    });
    newColor.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newColor:data });
        })
        .catch((error)=>{next(error)});
}


