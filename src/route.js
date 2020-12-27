const express = require('express');
var router = express.Router();
const { check, validationResult } = require("express-validator");

//Controllers
const {login,register} = require('./controllers/UserController');
const {home,about,contact,services,products,product,loginform,registerform,search,booking,faq} = require('./controllers/HomeController');


      router.get('/',home);
      router.get('/about',about);
      router.get('/contact',contact);
      router.get('/services',services);
      router.get('/faq',faq);
      router.post('/search',search);
      router.get('/rooms',products);
      router.get('/rooms/:id',product);

      router.get('/register',registerform);
      router.get('/login',loginform);
      router.post('/register/submit',register);
      router.post('/login/submit',login);
      router.post('/booking/submit',booking);
      
      

     //404 Page
          router.get('*',function(req,res){
            res.render('error',{
            title:'404'
            });
     });


module.exports = router;