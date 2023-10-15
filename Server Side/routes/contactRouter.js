const express = require('express');
const controller = require('./../Controller/contactController')
const router = express.Router(); // create routes object and return it


router.route('ElShopper/api/contact')
    .get(controller.getAllContactMsg)
    .post(controller.addContactInfo)




module.exports=router;