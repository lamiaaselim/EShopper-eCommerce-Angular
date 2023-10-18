const UserSchema = require('./../Model/userModel');
const bcrypt = require('bcrypt');
const config = require('config')

exports.authLogin= async (request, response, next)=>{
    try {
    // check if user already exists
    let user =await UserSchema.findOne({email:request.body.email}).exec();
    if (!user) 
    return response.status(400).send("Email not found");

    // check if user password validation
    let validPassword = await bcrypt.compare(request.body.password, user.password)
    if (!validPassword) 
        return response.status(400).send("Password is wrong");
    
    // success login
    // 1- send token with response 
    if(!config.get("jwtsecret"))
    return response.status(500).send("request cannot be fulfilled")
    const token = user.generateAuthToken();
        response.header("x-auth-token",token)
        response.status(200).send(" successful login ")
    } catch(error) {
        next(error)};
}
