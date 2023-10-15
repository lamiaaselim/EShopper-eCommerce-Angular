const ContactSchema = require('./../Model/contactModel');



exports.getAllContactMsg=(request, response, next)=>{
    ContactSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
} 

exports.addContactInfo=(request, response, next)=>{
    let newContactMsg = new ContactSchema({
        name: request.body.name ,
        phone:request.body.phone,
        email: request.body.email,
        message: request.body.message,
    });
    newContactMsg.save()
        .then((data) => {
            response.status(201).json({data:"Msg added successfully", newContactMsg:data });
        })
        .catch((error)=>{next(error)});
}



// exports.addContactInfo=(request, response, next)=>{
//     response.status(201).json({data: "dataa added successfully"});
// }