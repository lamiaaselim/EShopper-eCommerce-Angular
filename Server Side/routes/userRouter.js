const express = require('express');
const controller = require('./../Controller/userController')
const router = express.Router(); // create routes object and return it



router.route('/ElShopper/api/user')
    .get(
        // here add your authentication layer
        // here add your authorization layer
        // here add your validation layer
        controller.getAllUsers
        )
    .post(controller.addUsers)
    .patch(controller.updateUsers)
    

router.route('/ElShopper/api/user/:id?')
    .get(controller.getUserById)
    .delete(controller.deleteUsers)


module.exports=router;