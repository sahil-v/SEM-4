const express = require('express');
const app = express(); 
app.all('/student',(req,res,next)=>{
    console.log("Middleware Called for student");
    next();
})
app.get('/student',(req,res)=>
{
    res.send("Hello World From Express Server With student");
});
app.get('/student_api',(req,res)=>
{
        res.send("Hello World From Express Server With student.api");
});
app.get('/student',(req,res)=>
{
        res.send("Hello World From Express Server With Put Method");
});
app.get('/student',(req,res)=>
{
        res.send("Hello World From Express Server With Delete Method");
});
app.listen(3000,()=>
{
    console.log("Server Started At Port 3000")
});