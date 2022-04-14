exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated:false
  });
};
exports.postLogin = (req, res, next) => {
  req.isLoggedIn =true;
  res.render('/');
};
