const http = require('http')
const adminRouter= require('./routers/admin')
const shopRouter=require('./routers/shop')
const path= require('path')
//install express
const express = require('express')
const app= express()
//body post
app.use(express.urlencoded())

app.use('/admin',adminRouter)
app.use(shopRouter)
app.use((req,res,next)=>{
   res.status(404). sendFile(path.join(__dirname,'views','404.html'))
})
 
const server = http.createServer(app)
server.listen(3000)