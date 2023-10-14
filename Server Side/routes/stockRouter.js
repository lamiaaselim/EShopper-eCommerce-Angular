const express = require('express');
const controller = require('./../Controller/stockController')
const router = express.Router();  // create routes object and return it



router.route('/ElShopper/api/stock')
    .get(controller.getAllStock)
    .post( controller.addStock)



module.exports=router;