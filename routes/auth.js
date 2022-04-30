const express = require('express');

const {check, body }= require('express-validator')

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/signup',
        [check('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .custom((value, {req})=>{
                if(value ==='test@test.com'){
                    throw new Error('This email address if forbiden')
                }
                return true
            }),
        body('password', "Please enter a password with only numbers and at least 5 character ")
            .isLength({min:5})
            .isAlphanumeric()
        ],  
        authController.postSignup);

router.post('/logout', authController.postLogout);

module.exports = router;