const ReviewSchema = require('./../Model/reviewModel');

exports.getAllReviews=(request, response, next)=>{
    ReviewSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 


exports.addReview=(request, response, next)=>{
    let newReview = new ReviewSchema({
        product: request.body.product ,
        user:request.body.user,
        rating: request.body.rating,
        text: request.body.text,
        date: request.body.date,
    });
    newReview.save()
        .then((data) => {
            response.status(201).json({data:"review added successfully",newReview:data });
        })
        .catch((error)=>{next(error)});
}
