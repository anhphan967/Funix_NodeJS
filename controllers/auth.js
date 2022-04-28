const User = require('../models/user');
exports.getLogin = (req, res, next) => {
  //const isLoggedIn = req.get("Cookie").split("=")[1] === "true";    
  console.log(req.session)
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
    res.redirect('/');
  })
  .catch(err => console.log(err));
  };


exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};