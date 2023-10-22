const express = require('express');
const controller = require('./../Controller/categoryController')
const router = express.Router();  // create routes object and return it



router.route('/ElShopper/api/category')
    .get(controller.getAllCategories)
    .post( controller.addCategory)


router.route('/ElShopper/api/category/:name?')
    .get(controller.getCategoryByName)

module.exports=router;