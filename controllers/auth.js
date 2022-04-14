exports.getLogin = (req, res, next) => {
  //const isLoggedIn = req.get("Cookie").split("=")[1] === "true";  
  console.log(req.session.isLoggedIn)
  res.render('auth/login', {    
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated:req.session.isLoggedIn,
  });
};
exports.postLogin = (req, res, next) => {
  //res.setHeader("Set-Cookie", "loggedIn=true, HttpOnly");
  req.session.isLoggedIn=true;
  res.redirect('/login');
};
exports.outLogin = (req, res, next) => {
  req.session.destroy((err)=>{
    console.log(err),
    res.redirect('/')
  })  
};
