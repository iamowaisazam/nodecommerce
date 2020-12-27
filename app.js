const { compile } = require('ejs');
const express = require('express');
const app = express();
const http = require('http')
const router = express.Router();
const checkUrl = require('./src/methods/middleware');
const port = process.env.PORT || 4500;

//routes
var MainRoutes = require('./src/route');


//Views Set
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./public/views');
app.use(express.urlencoded({extended:true}));
app.use('/', MainRoutes);
app.listen(port);