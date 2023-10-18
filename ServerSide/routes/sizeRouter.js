const express = require('express');
const controller = require('./../Controller/sizeController')
const router = express.Router();  // create routes object and return it



router.route('/ElShopper/api/size')
    .get(controller.getAllSizes)
    .post( controller.addSize)



module.exports=router;