const http = require('http')

const serv = http.createServer((req,res)=>{
    console.log(req.url)
    res.end("Hello World from my see")
})

serv.listen(3001,()=>
{
    console.log("SERVER STARTED AT 3001:")
})