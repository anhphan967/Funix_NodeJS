const Product = require('../models/product');
const Cart= require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct=(req,res, next)=>{
  const productId=req.params.productId  
  Product.findById(productId,product=>{
    console.log(product)
    res.render('shop/product-detail', {
      product:product,
      path:'product-detail',
      pageTitle: product.pageTitle
    })
  })
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const proID = req.body.productId;
  Product.findById(proID, product=>{
    Cart.addProduct(proID,product.price )
  })
  console.log(proID);
  res.redirect('/cart')
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
