const express = require('express');
const controller = require('./../Controller/productController')
const router = express.Router(); // create routes object and return it



router.route('/product')
    .get(controller.getAllProduct)
    .post(controller.addProduct)
    .patch(controller.updateProduct)
    // .delete(controller.deleteProduct)

router.route('/product/:id?')
    .get(controller.getProductById)
    .delete(controller.getProductById)

// router.route('/product')
//     .patch(controller.updateProduct)



module.exports=router;