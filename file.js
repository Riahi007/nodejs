const fs=require('fs')


fs.writeFileSync("welcome.txt","hello node")



const data=fs.readFileSync("hello.txt","utf8")
console.log(data)