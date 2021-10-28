//Created by Mahpara Rafia Radmy - 301176893 - 27 October, 2021 
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* Route to display the Login Page. */
router.get('/login', indexController.displayLoginPage);

/* Route to process Login Page. */
router.post('/login', indexController.processLoginPage);

/* Route to perform User Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;