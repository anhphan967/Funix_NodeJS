   const products=[] 
    
    exports.getAddProduct=(req, res, next)=>{
        res.render('add-product',
        {pageType:'add-product', 
        path:'add-product',
        activeProduct:true,
        productCSS:true
    })   
    }
    //
    
    exports.postAddProduct=(req, res, next)=>{                
        products.push({title:req.body.title})   
        res.redirect('/')
        }

    exports.getProduct=(req, res, next)=>{             
        res.render('shop',
            {prods:products, 
            pageType:'Shop', 
            path:'/',
            prodsLength: products.length >0,
            activeShop:true,
            productCSS:true
        })       
     }        
    