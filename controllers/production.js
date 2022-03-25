  const Product=require('../model/product')
    
    exports.getAddProduct=(req, res, next)=>{
        res.render('add-product',
        {pageType:'add-product', 
        path:'add-product',
        activeProduct:true,
        productCSS:true
    })   
    }
    
    
    exports.postAddProduct=(req, res, next)=>{                
        const product= new Product(req.body.title)
        product.save();                  
        res.redirect('/')
        }

    exports.getProduct=(req, res, next)=>{
        const products= Product.fetchAll()             
        res.render('shop',
            {prods:products, 
            pageType:'Shop', 
            path:'/',
            prodsLength: products.length >0,
            activeShop:true,
            productCSS:true
        })       
     }        
    