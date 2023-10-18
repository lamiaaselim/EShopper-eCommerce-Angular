const express = require('express');
const controller = require('./../Controller/colorController')
const router = express.Router();  // create routes object and return it



router.route('/ElShopper/api/color')
    .get(controller.getAllColors)
    .post( controller.addColor)


router.route('/ElShopper/api/color/:id?')
    .get(controller.getColorById)




module.exports=router;