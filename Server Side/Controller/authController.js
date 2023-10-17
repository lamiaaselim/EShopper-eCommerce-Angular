const UserSchema = require('./../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    const token = jwt.sign({userId: user._id}, "thisissecretkey")
        response.header("x-auth-token",token)
        response.status(200).send(" successful login ")
    } catch(error) {
        next(error)};
}
