const http = require('http')
const adminRouter= require('./routers/admin')
const shopRouter=require('./routers/shop')
//install express
const express = require('express')
const app= express()
//body post
app.use(express.urlencoded())

app.use(adminRouter)
app.use(shopRouter)
app.use((req,res,next)=>{
   res.status(404). send('<h1>Page not found </h1>')
})
 
const server = http.createServer(app)
server.listen(3000)