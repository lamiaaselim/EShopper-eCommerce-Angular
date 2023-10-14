const express = require('express');
const controller = require('./../Controller/productController')
// const productValidator = require('./../middlewares/ProductValidatorMW')
const router = express.Router();  // create routes object and return it



router.route('/ElShopper/api/product')
    .get(controller.getAllProduct)
    .post( controller.addProduct)
    .patch(controller.updateProduct)


router.route('/ElShopper/api/product/:id?')
    .get(controller.getProductById)
    .delete(controller.deleteProduct)



module.exports=router;