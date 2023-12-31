const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the 'cors' module
const bodyParser = require('body-parser');

const categorRouter =require('./routes/categoryRouter');
const productRouter =require('./routes/productRouter');
const colorRouter =require('./routes/colorRouter');
const sizeRouter =require('./routes/sizeRouter');
const stockRouter =require('./routes/stockRouter');
const reviewRouter = require('./routes/reviewRouter');
const cartRouter = require('./routes/cartRouter');
const orderRouter = require('./routes/orderRouter');
const userRouter =require('./routes/userRouter');
const contactRouter =require('./routes/contactRouter');
const authRouter =require('./routes/authRouter');

const server = express();

// Enable CORS for all routes (you can configure this as needed)
server.use(bodyParser.json());
server.use(cors());

const port = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://ElShopper:ElShopper@cluster0.6nwdzcz.mongodb.net/")
    .then(() => {
        console.log("DB connection established")
        server.listen(port, ()=>{
            console.log("I'm listening ..")
        });
    })
    .catch((error) => {
        console.log("connection error" + error)
    });
/* -----------------Server layer ----------------- */ 
// First Mw loading -- login
server.use((request, response, next)=>{
    console.log(request.url , request.method);
    next();
});
/* -----------------Routes ----------------- */ 
server.use(express.json());

server.use(categorRouter);
server.use(productRouter);
server.use(colorRouter);
server.use(sizeRouter);
server.use(stockRouter);
server.use(reviewRouter);
server.use(cartRouter);
server.use(orderRouter);
server.use(userRouter);
server.use(contactRouter);

server.use(authRouter);
// Second Mw loading -- authentication
server.use((request, response, next)=>{
    console.log("Second Mw loading -- authentication");
    next();
    // jumb to error middleware
});

// 3 Mw loading -- NotFound
server.use((request, response, next)=>{
    response.status(404).json({message: "3 Mw loading -- Page not found"});
    next();
});

// 4 Mw loading -- Error
server.use((error,request, response, next)=>{
    response.status(500).json({message: "4 Mw loading -- Error" + error});
    next();
});