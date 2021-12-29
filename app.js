const fs = require("fs");
const http = require("http");
const url = require("url");
const server = http.createServer((req,res)=>{
    const pathname = req.url;
    console.log(pathname)
    res.write("Hello world");
    res.end();
});
server.listen(8000,()=>{
    console.log("server has started")
})
