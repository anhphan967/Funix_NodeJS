const express = require('express');

const authController = require('../controllers/auth');

const isAuth= require('../middleware/is_auth')

const router = express.Router();

router.get('/login',  authController.getLogin);

router.post('/login', isAuth, authController.postLogin);

router.post('/logout', isAuth, authController.postLogout);

router.get('/signup',  authController.getSignup);

router.post('/signup', isAuth, authController.postSignup);


module.exports = router;