const cp = require("child_process")
const { stdout } = require("process")

cp.exec("echo Sahil Vasoya",(err,stdout,stderr)=>{
    console.log(stdout)
    console.log(err)
    console.log(stderr)
})