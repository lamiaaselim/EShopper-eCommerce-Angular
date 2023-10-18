const validator = require('./../Util/authValidator');

module.exports = (request, response, next) => {
    let valid = validator(request.body)
    if(valid) {
        request.valid = 1;
        next();
    }else {
        response.status(403).send("forbidden command");
    }

};