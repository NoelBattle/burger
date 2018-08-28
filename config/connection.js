var mysql= require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port:3306,
  
    // Your username
    user: "root",
  
    // Your password
    
    database: "burgers_db",
    password: "Diamond1"
  });

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });



  
  module.exports=connection;

  