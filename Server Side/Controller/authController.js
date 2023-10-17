const UserSchema = require('./../Model/userModel');
const bcrypt = require('bcrypt');

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
    response.status(200).send("Ok success login" )
    } catch(error) {
        next(error)};
}
