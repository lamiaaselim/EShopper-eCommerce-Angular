exports.addInfo=(request, response, next)=>{
    response.status(201).json({data: "dataa added successfully"});
}