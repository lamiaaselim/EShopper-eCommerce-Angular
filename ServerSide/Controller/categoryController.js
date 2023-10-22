const CategorySchema = require('./../Model/categoryModel');


exports.getAllCategories=(request, response, next)=>{
    CategorySchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 

exports.getCategoryByName=(request, response, next)=>{
    CategorySchema.findOne({categoryName:request.params.name})
        .then((data) => {
            if (data == null)
            throw new Error ("Category dosen't exist")
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}


exports.addCategory=(request, response, next)=>{
    let newCategory = new CategorySchema({
        categoryName:request.body.categoryName,
        image:request.body.image,
    });
    newCategory.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newCategory:data });
        })
        .catch((error)=>{next(error)});
}


