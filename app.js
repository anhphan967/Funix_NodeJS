const http = require('http')
const adminRouter= require('./routers/admin')
const shopRouter=require('./routers/shop')
const path= require('path')
const rootDir= require('./util/path')

//install express
const express = require('express')
const app= express()
//body post
app.use(express.urlencoded())
//use static
app.use(express.static(path.join(rootDir,'public')))
//pug
app.set('view engine', 'pug');
app.set('views', 'views');

app.use('/admin',adminRouter.router)
app.use(shopRouter)
app.use((req,res,next)=>{
   res.status(404).render('404')
})
 
const server = http.createServer(app)
server.listen(3000)