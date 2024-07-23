const http = require("http")
server = http.createServer((req,res)=>{
    res.end('hello')
})
server.listen(3000,()=>{
    console.log("server started at 3000");
})