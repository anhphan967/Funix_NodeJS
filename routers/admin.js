const express= require('express')
const router= express.Router()

router.get('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="tittle"/><button>Submit</button></form>')   
    next()
    
 })
router.post('/product',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
    }) 
module.exports=router