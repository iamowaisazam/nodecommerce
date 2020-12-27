const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"admin",
});

con.connect(function(error){

        if(error){
            console.log('db Error');
        }
        
})