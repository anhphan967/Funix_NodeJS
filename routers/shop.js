const express = require('express')
const router= express.Router()
const path= require('path')
const adminData=require('./admin')

router.get('/',(req, res, next)=>{
    console.log(adminData.products)
    const product=adminData.products
    res.render('shop',
        {prods:product, 
        pageType:'Shop', 
        path:'/',
        prodsLength: product.length >0,
        activeShop:true,
        productCSS:true
    })
    //res.sendFile(path.join(__dirname, '../','views','shop.html'))     
 }) 
 module.exports= router