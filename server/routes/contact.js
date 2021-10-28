//Created by Mahpara Rafia Radmy - 301176893 - 11 October, 2021 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Me',
    userName: 'Mahpara Rafia Radmy'
   });
});

module.exports = router;
