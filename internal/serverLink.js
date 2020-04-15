const mysql = require("mysql");

let serverLink = mysql.createConnection({
    host: "mysql://bbdaf576376684:ed03b043@us-cdbr-iron-east-01.cleardb.net/heroku_55b03d9215f8de3?reconnect=true",
    // port: 3306,
    user: "	bbdaf576376684",
    password: "ed03b043",
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