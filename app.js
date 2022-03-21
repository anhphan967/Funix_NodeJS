const http = require('http')
//install express
const express = require('express')
const app= express()
// midleware 
app.use((res, rep, next)=>{
   console.log('in first midleware 1')
   next() // allow the request to continue the next midleware in line
})
app.use((res, rep, next)=>{
   rep.send('<h1>hello</h1>')
   console.log('in first midleware 2')
   //
})
const server = http.createServer(app)
server.listen(3000)