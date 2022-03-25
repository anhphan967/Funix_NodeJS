const http = require('http')
const adminRouter= require('./routers/admin')
const shopRouter=require('./routers/shop')
const errorController= require('./controllers/error')
const path= require('path')
const rootDir= require('./util/path')
const morgan = require('morgan')

//const expressHbs =require('express-handlebars');
//install express
const express = require('express')
const app= express()
//body post
app.use(express.urlencoded())
//use static
app.use(express.static(path.join(rootDir,'public')))  
//morgan
app.use(morgan('combined'))
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



app.use('/admin',adminRouter)
app.use(shopRouter)
app.use(errorController.error)
 
const server = http.createServer(app)
server.listen(3000)