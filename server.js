var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var app = express();
const routes = require("./routes/api");


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use("/", routes);

app.listen(PORT, function() {
  console.log("Server on: http://localhost:" + PORT);
});

