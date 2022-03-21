const http = require('http')
//install express
const express = require('express')
const app= express()
// midleware 
app.use((res, rep, next)=>{
   console.log('allways run')
   next() // allow the request to continue the next midleware in line
})
app.use('/add-product',(res, rep, next)=>{
   rep.send('<h1>The Add product page</h1>')   
   next()
   //
})
app.use('/',(res, rep, next)=>{
   rep.send('<h1>Hello from Express.js</h1>')   
   //
})
const server = http.createServer(app)
server.listen(3000)