const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Server has started at port 3000");
})

app.get("/",(request,response)=>{
    response.send("This is get request");
})

app.post("/api/cars",(request,response)=>{
    const {name,brand} =request.body;
    console.log(`The name of car is ${name}`);
    console.log(`The brand of car is ${brand}`);
    response.send("This is post request");
})


const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser :true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connection-succesfull")
})
.catch(()=>{
    console.log("connection-unsuccesfull")
})
