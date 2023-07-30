//Creating an instance
const express = require('express');
const app = express();


const bodyParser = require('body-parser');


//specifically parse JSON data &  add it to request.Body object
app.use(bodyParser.json());

//activate the srver on 3000 port
app.listen(3000,()=>{
    console.log("server started at port at 3000")
});

//Routes
app.get("/",(request,response)=>{
    response.send("hello My name is himanshu")
})

app.post("/api/cars",(request,response)=>{
    const {name , brand} = request.body;
    console.log(name);
    console.log(brand); 
    response.send("data has been submitted");
})  

//connecting backend with database using mongoose


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser :true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connection succesfull")
})
.catch(()=>{
    console.log("connection Unsuccesfull")
})