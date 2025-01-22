const http = require('http')

const serv = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/')
    {
        res.end("This is default page")
    }
    if(req.url=='/home')
    {
        res.end("This is home page")
    }
    if(req.url=='/about')
    {
        res.end("This is about page")
    }
    if(req.url=='/contactus')
    {
        res.end("This is contact us page")
    }
})
serv.listen(3000,()=>{
    console.log("server started:")
})