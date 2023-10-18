const express = require('express');
const controller = require('./../Controller/reviewController')
const router = express.Router();  // create routes object and return it



router.route('/ElShopper/api/review')
    .get(controller.getAllReviews)
    .post( controller.addReview)



module.exports=router;