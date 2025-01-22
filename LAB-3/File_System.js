const fs = require('fs')

const data= fs.readFileSync('demo.txt','utf-8')
console.log(data);

const data1= fs.writeFileSync("demo.txt","Sahil")

const app = fs.appendFileSync("demo.txt"," Vasoya")