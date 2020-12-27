const { check, validationResult } = require("express-validator");
const rooms = require('../config/api');

 //Home 
 exports.home = async function(req,res){

    res.render('index',{
        title:'Home',
        rooms:rooms
    });

    //res.send('failed');
}


//about
 exports.about = async function(req,res){

    res.render('about',{
    title:'About Page'
    });
}


//contacts
exports.contact = async function(req,res){
    res.render('contact',{
    title:'Contact'

    });
}

//Services
exports.services = async function(req,res){
    res.render('services',{
    title:'Services'
    });
}

//Faq
exports.faq = async function(req,res){
    res.render('faq',{
    title:'Frequently Asked Question'
    });
}

//Products
exports.products = function(req,res){
    res.render('shop/products',{
        title:'Rooms',
        rooms:rooms
    });
}

//Product Detail
exports.product = async function(req,res){

    let id = req.params.id;
     if(id != null){

        const found = rooms.find(element => element.id == id);
        res.render('shop/single',{
            title:found.title,
            room:found
        });

     }else{

        res.redirect('/home');
     } 
 
}

//Booking
exports.booking = async function(req,res){

    let data = {
        Startdate:req.body.sdate,
        Enddate:req.body.edate,
        adult:req.body.adult,
        children:req.body.children,
        details:req.body.details,
        email:req.body.email,
        phone:req.body.phone,
    }
    
    // res.render("login", { 
    //     title: 'login', 
    //     errors: errors.array(), 
    //     inputs: req.body, 
    // });

 

     console.log(data);
    res.send('done');
}





//Register Form
exports.registerform = async function(req,res){
    res.render('register',{
    title:'Register'
    });
}

//Login Submit
exports.loginform = async function(req,res){
    res.render('login',{
    title:'Login'
    });
}


//Login Function
exports.search = async (req, res) => {
    
    res.redirect('/rooms');
 
}