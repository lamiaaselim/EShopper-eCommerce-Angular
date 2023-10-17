const express = require('express');
const controller = require('./../Controller/userController')
const router = express.Router(); // create routes object and return it
const validator = require('./../middlewares/userValidatorMW');


router.route('/ElShopper/api/user')
    .get(controller.getAllUsers)
    // Authentication user
    // 1. register the user by post
    .post( validator,controller.addUsers)
    .patch(controller.updateUsers)
    

router.route('/ElShopper/api/user/:id?')
    .get(controller.getUserById)
    .delete(controller.deleteUsers)


module.exports=router;