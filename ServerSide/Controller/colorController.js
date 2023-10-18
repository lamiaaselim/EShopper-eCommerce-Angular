const ColorSchema = require('./../Model/colorModel');


exports.getAllColors=(request, response, next)=>{
    ColorSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 


exports.getColorById=(request, response, next)=>{
    ColorSchema.findOne({colorId:request.params.id})
        .then((data) => {
            if (data == null)
            throw new Error ("Color dosen't exist")
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.addColor=(request, response, next)=>{
    let newColor = new ColorSchema({
        
        colorId:request.body.colorId,
        name:request.body.name,
        code:request.body.code,
    });
    newColor.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newColor:data });
        })
        .catch((error)=>{next(error)});
}


