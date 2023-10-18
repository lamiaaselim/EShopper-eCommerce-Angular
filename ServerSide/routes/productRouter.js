const express = require('express');
const controller = require('./../Controller/productController')
const auth = require('./../middlewares/authPremissionMW');
const router = express.Router();  // create routes object and return it



router.route('/ElShopper/api/product')
    .get(controller.getAllProduct)
    .post( auth, controller.addProduct)
    .patch(auth, controller.updateProduct)


router.route('/ElShopper/api/product/:id?')
    .get(controller.getProductById)
    .delete(auth,controller.deleteProduct)



module.exports=router;