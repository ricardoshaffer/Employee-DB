const mysql = require("mysql");
let serverLink;

if(process.env.JAWSDB_URL){
    serverLink = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    serverLink = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "end",
        database: "employee_manager"
    })
}
   
  serverLink.connect();
  module.exports = serverLink;