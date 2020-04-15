const mysql = require("mysql");

let serverLink = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "r!c@rd01987",
    database: "employee_manager"
  });
  
  
  
  serverLink.connect(function(err) {
    if (err) {
      console.error("connection error: " + err);
      return;
    }
  
    console.log("connected as id " + serverLink.threadId);
  });
  
  module.exports = serverLink;