const express =require("express");
var mysql = require('mysql');
var cors= require('cors')
app =express();
app.use(express.json());
app.use(cors())

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password@123',  
    database : 'portcontact'
  });
  connection.connect();
  app.post('/user',(req,res)=>{
    console.log(req,'req');
    connection.query('insert into portcontactus(uname,email,message)values(?,?,?)',[req.body.uname,req.body.email,req.body.message] , function (error, results) {
      if (error){
        console.log(error)
      }
      console.log('The solution is: ', results);
      res.json(results);
    });
  })
  app.listen(3000,()=>{
    console.log("listening on 3000");
});