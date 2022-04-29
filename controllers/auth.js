const User = require('../models/user');
const bcryptjs= require('bcryptjs')
exports.getLogin = (req, res, next) => {
  //const isLoggedIn = req.get("Cookie").split("=")[1] === "true";
  res.render('auth/login', {    
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated:false
  });
};
exports.postLogin = (req, res, next) => {
  //res.setHeader("Set-Cookie", "loggedIn=true, HttpOnly");
  User.findById('62578ab545dfa884da663fde')
  .then(user => {
    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save(err=>{
      console.log(err)
      res.redirect('/');      
    })
  })
  .catch(err => console.log(err));
  };


exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
exports.getSignup = (req, res, next) => {
  res.render('auth/signup',{
    path: 'signup',
    pageTitle: 'Signup',
    isAuthenticated:false}
  )
};

exports.postSignup=(req, res, next)=>{
  const email= req.body.email;
  const password= req.body.password;
  const confirmPassword= req.body.confirmPassword;  
  User.findOne({email:email})
  .then(userDoc=>{
    if(userDoc){
      return res.redirect('/login')
    }
    return bcryptjs.hash(password,12)   
  })
  .then(hashPass=>{
    const user = new User({
      email:email,
      password: hashPass,
      cart:{items:[]}
    })
    user.save()
  })
  .then( result=> {res.redirect('/login')}  )
  .catch(err=>console.log(err))
}


