const bcrypt = require('bcryptjs');

const { validationResult} = require('express-validator/check')

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  let message= req.flash('error')  
  if(message.length>0){
    message=message[0]
  }else{
    message=null
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message,
    oldInput:{ 
      password:'',
        email: '',
        confirmPassword: ''            
    },
    validationErrors:[]       
  });
};

exports.getSignup = (req, res, next) => {
  let message= req.flash('error')  
  if(message.length>0){
    message=message[0]
  }else{
    message=null
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message,
    oldInput:{ 
      password:'',
        email: '',
        confirmPassword: ''            
    },
    validationErrors:[]       
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const erros= validationResult(req)
  if(!erros.isEmpty()){   
    console.log(erros.array()) 
    return res.status(422).render('auth/login', {
      path: '/login',
      pageTitle: 'Login',
      errorMessage: erros.array()[0].msg,
      oldInput:{
        password:password,
        email: email        
      },
       validationErrors:erros.array()      
    })
  }  
  User.findOne({ email: email })
    .then(user => {
      if (!user) {        
        return res.status(422).render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          errorMessage:  'Invalid email or password',
          oldInput:{
            password:password,
            email: email        
          },
           validationErrors:[]  
        })
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {            
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          return res.status(422).render('auth/login', {
            path: '/login',
            pageTitle: 'Login',
            errorMessage:  'Invalid email or password',
            oldInput:{
              password:password,
              email: email        
            },
             validationErrors:[]
            })  
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  
  const erros= validationResult(req)
  if(!erros.isEmpty()){   
    console.log(erros.array()) 
    return res.status(422).render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup',
      errorMessage: erros.array()[0].msg,
      oldInput:{
        password:password,
        email: email,
        confirmPassword: req.body.confirmPassword
      },
       validationErrors:erros.array()      
    })
  }
 
      bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');          
        })
        .catch(err => console.log(err));     
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
