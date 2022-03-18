const fs=require('fs');
fs.writeFileSync('hello.txt', 'Hello from node.js');

// create node_server
 const http= require('http')  
 const server = http.createServer((req,res)=>{
     console.log(req)
 })
 server.listen(3000)
