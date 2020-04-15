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


// GET EMPLOYEE INFORMATION
// Show the user the individual quote and the form to update the quote.
// router.get("/:id", function(req, res) {
//   serverLink.query("SELECT * FROM employees where id = ?", [req.params.id], function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     console.log(data);
//     res.render("update", data[0]);
//   });
// });
// {{!-- id, first_name, last_name, employee_ID, title, department, salary --}}

// Post route -> back to home
// router.post("/api/employees", function(req, res) {
//   serverLink.query("INSERT INTO employees (first_name, last_name, employee_ID, title, department, salary) VALUES (?, ?, ?, ?, ?, ?)", 
//   [req.body.first_name, req.body.last_name, req.body.employee_ID, req.body.title, req.body.department, req.body.salary, req.params.id], 
//   function(err, result) {
//     if (err) throw err;
//     res.json({ id: result.insertId });
//     res.redirect("/");
//   });
// });




//UPDATE EMPLOYEE INFORMATION
// router.put("/api/employees/:id", function(req, res) {
//   serverLink.query("UPDATE employees SET first_name = ?, last_name = ?, employee_ID = ?, title = ?, department = ?, salary = ?, WHERE id = ?",
//     [req.body.first_name, req.body.last_name, req.body.employee_ID, req.body.title, req.body.department, req.body.salary, req.params.id],
//     function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
//       else if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });
app.listen(PORT, function() {
  console.log("Server on: http://localhost:" + PORT);
});

