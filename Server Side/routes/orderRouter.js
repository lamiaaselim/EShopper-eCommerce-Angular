const express = require('express');
const controller = require('./../Controller/orderController')
const router = express.Router();  // create routes object and return it



router.route('/ElShopper/api/order')
    .get(controller.getAllOrders)
    .post( controller.addOrder)



module.exports=router;