const UserSchema = require('./../Model/userModel');
const bcrypt = require('bcrypt');


exports.getUserById=(request, response, next)=>{
    UserSchema.findOne({idUser:request.params.id})
        .then((data) => {
            if (data == null)
            throw new Error ("User dosen't exist")
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.getAllUsers=(request, response, next)=>{
    UserSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
    // response.status(200).json({data: [{id:1 , name:"Ahmed"},{id:2 , name:"Salah"}]});
}

// Registration
exports.addUsers= async (request, response, next)=>{
    try {
    // check if user already exists
    let user =await UserSchema.findOne({email:request.body.email}).exec();
    if (user) {
        return response.status(400).send("user already exists");
    }
    // create new user
    let saltRound =await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(request.body.password, saltRound)
    let newUser = new UserSchema({
        idUser:request.body.idUser,
        name:request.body.name,
        phone:request.body.phone,
        email:request.body.email,
        password:hashedPassword,
        role:request.body.role,
    });
    const savedUser = await newUser.save();
    const token = savedUser.generateAuthToken();
        response.header("x-auth-token",token)
        response.status(200).send(" successful registration")
        response.status(201).json({data:"data added successfully", user:savedUser })
    } catch(error) {
        next(error)};
}

exports.updateUsers =(request, response, next)=>{
    UserSchema.findOneAndUpdate(
        {idUser:request.body.idUser},
        { $set:{name:request.body.name}},
        { new: true } // to return the updated document
    )
    .then(updatedUser => {
        if (updatedUser) {
            response.status(200).json({ message: "User updated successfully" });
        } else {
            response.status(404).json({ message: "ID doesn't exist" });
        }
    })
    .catch(error => {
        console.error("Update error: ", error);
        next(error);
    });
}

exports.deleteUsers=(request, response, next)=>{
    const userId = request.params.id; // Assuming the ID is passed as a URL parameter

    UserSchema.findOneAndDelete({idUser: userId},)
        .then((deletedUSer) => {
            if (!deletedUSer) {
                throw new Error("User not found");
            }
            response.status(200).json({ message: "User deleted successfully" });
        })
        .catch((error) => {
            next(error);
        });
}