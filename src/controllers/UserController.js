const { check, validationResult } = require("express-validator");

const db = require('../config/db');


//Register Functions
exports.register = async (req, res) => {

    //Validations
    await check('fname').notEmpty().run(req);
    await check('lname').notEmpty().run(req);
    await check('email').isEmail().run(req);
    await check('password').isLength({ min: 6 }).run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        res.render("register", { 
            title: 'register', 
            errors: errors.array(), 
            inputs: req.body, 
         });
      } 


      let fname = req.body.fname;
      let lname = req.body.lname;
      let email = req.body.email;
      let password = req.body.password;
       res.redirect('/');

};






//Login Function
exports.login = async (req, res) => {
    
    //Validations
    await check('email').isEmail().run(req);
    await check('password').isLength({ min: 6 }).run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        res.render("login", { 
            title: 'login', 
            errors: errors.array(), 
            inputs: req.body, 
        });
     } 

        let email = req.body.email;
        let password = req.body.password;
      //  res.redirect('/');

};