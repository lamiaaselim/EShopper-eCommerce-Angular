const express = require('express');
const controller = require('./../Controller/authController')
const router = express.Router(); // create routes object and return it
const validator = require('./../middlewares/authValidatorMW');


router.route('/ElShopper/api/login')
    .post( validator,controller.authLogin)



module.exports=router;