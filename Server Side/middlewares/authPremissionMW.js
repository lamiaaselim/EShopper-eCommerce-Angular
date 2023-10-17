const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = (request, response, next) => {
    // get the (x-auth-token) from the header
    const token = request.header("x-auth-token")
    if(!token) return response.status(401).send("access denied")
    try {
    const decodedPayload = jwt.verify(token, config.get("jwtsecret"));
    // chick user role (admin or user)
    if(!(decodedPayload.userRole)=== 'admin')
    return response.status(400).send("Access denied")
    next();
    } catch(error) {
        response.status(400).send("Token is not valid");
    }
}