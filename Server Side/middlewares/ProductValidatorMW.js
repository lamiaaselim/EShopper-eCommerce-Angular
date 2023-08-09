const { request } = require('express');
const validate = require('./../Util/productValidator');

module.exports = (request, response, next) => {
    let valid = validate(request.body)
    if(valid) {
        request.valid = 1;
        next();
    }else {
        response.status(403).send("forbidden command");
    }

}