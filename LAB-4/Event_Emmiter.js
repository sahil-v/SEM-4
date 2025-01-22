const EventEmitter = require('events')
class myemmiter  extends EventEmitter{}
const em= new myemmiter()   
em.on("Notfication",()=>{
    console.log("Notification recived")
})
em.emit("Notfication")
setInterval(()=>{
    console.log("Hi")
},3000)
