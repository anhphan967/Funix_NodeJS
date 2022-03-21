const http = require('http')
//install express
const express = require('express')
const app= express()
//body post
app.use(express.urlencoded())
// midleware 
app.use((req, res, next)=>{
   console.log('allways run')
   next() // allow the request to continue the next midleware in line
})
app.use('/add-product',(req, res, next)=>{
   res.send('<form action="/product" method="POST"><input type="text" name="tittle"/><button>Submit</button></form>')   
   next()
   
})
app.post('/product',(req, res, next)=>{
   console.log(req.body)
   res.redirect('/')
   }) 
app.use('/',(req, res, next)=>{
   res.send('<h1>Hello from Express.js</h1>')   
   next()
})  
const server = http.createServer(app)
server.listen(3000)