const express = require('express')
const router= express.Router()
const path= require('path')
const adminData=require('./admin')

router.get('/',(req, res, next)=>{
    console.log(adminData.products)
    const product=adminData.products
    res.render('shop.pug',{prods:product, pageType:'Shop', path:'/'})
    //res.sendFile(path.join(__dirname, '../','views','shop.html'))     
 }) 
 module.exports= router