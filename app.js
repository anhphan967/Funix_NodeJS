const http = require('http')
const adminRouter= require('./routers/admin')
const shopRouter=require('./routers/shop')
const path= require('path')
const rootDir= require('./util/path')
//const expressHbs =require('express-handlebars');
//install express
const express = require('express')
const app= express()
//body post
app.use(express.urlencoded())
//use static
app.use(express.static(path.join(rootDir,'public')))  

//pug
//app.set('view engine', 'pug');
//app.set('views', 'views');

//handlerbars
// app.engine('hbs',expressHbs.engine({
//    extname: '.hbs',
//    layoutsDir:'views/layouts/',
//    defaultLayout:'main-layout'
//  })
// )
// app.set('view engine', 'hbs');
// app.set('views', 'views');

//ejs 
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use('/admin',adminRouter.router)
app.use(shopRouter)
app.use((req,res,next)=>{
   res.status(404).render('404',{pageType:'Page not found', path:''})
})
 
const server = http.createServer(app)
server.listen(3000)