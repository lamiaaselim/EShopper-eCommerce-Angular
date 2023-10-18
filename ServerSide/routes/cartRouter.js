const express = require('express');
const controller = require('./../Controller/cartController')
const router = express.Router();  // create routes object and return it



router.route('/ElShopper/api/cart')
    .get(controller.getAllCartItems)
    .post( controller.addCartItem)



module.exports=router;