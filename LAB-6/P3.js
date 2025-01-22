const http = require('http')
const fs = require('fs')


const serv = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/')
    {
         fs.readFile('about.txt','utf-8',(err,data)=>
        {
            if(err){
                throw err;
            }
            res.end(data) 
        })  
           
    }
    if(req.url=='/contactus')
    {
        fs.readFile('contact.txt','utf-8',(err,data)=>
        {
            if(err){
                throw err;
            }
            res.end(data) 
        })  
               
    }
    if(req.url=='/index')
        {
             fs.readFile('index.html','utf-8',(err,data)=>
            {
                if(err){
                    throw err;
                }
                res.end(data) 
            })  
               
        }
        
})

serv.listen(3000,()=>
{
    console.log("SERVER STARTED AT 5002:")
})