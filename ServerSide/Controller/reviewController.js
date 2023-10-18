const ReviewSchema = require('./../Model/reviewModel');

exports.getAllReviews=(request, response, next)=>{
    ReviewSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 

exports.getReviewById=(request, response, next)=>{
    ReviewSchema.findOne({reviewId:request.params.id})
        .then((data) => {
            if (data == null)
            throw new Error ("Review dosen't exist")
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.addReview=(request, response, next)=>{
    let newReview = new ReviewSchema({
        reviewId:request.body.reviewId,
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
