const mysql = require('mysql');


// const con = mysql.createConnection({
//     host:"95.217.116.67",
//     user:"techmani_wp719",
//     password:"[?_@)hfV&pKc",
//     database:"techmani_admin",
// });


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"admin",
});
   
 con.connect(function(error){

        if(error) 
            throw error;
        else

        console.log('connected');
    });

module.exports = con