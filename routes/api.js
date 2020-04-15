let router = require("express").Router();
let serverLink = require("../internal/serverLink");


//==============================
// PULLS DATA FROM THE DATABASE
//==============================
router.get("/", function(req, res) {
    serverLink.query("SELECT * FROM employees;", function(err, data) {
  
      res.render("index", { employees: data });
    });
  });
  //==== UPDATED DATA
  router.get("/update/:id", function(req, res) {
    serverLink.query("SELECT * FROM employees where id = ?", [req.params.id], function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      console.log(data);
      res.render("update", data[0]);
    });
  });
  router.get("/add", function(req, res) {
      res.render("create");

  });
  //=== UPDATED DATA
//==============================
// SAVES DATA FROM THE DATABASE
//==============================

//====== UPDATED DATA

router.post("/api/add", function(req, res) {
    serverLink.query("INSERT INTO employees(first_name, last_name, employee_ID, title, department, salary) VALUES (?, ?, ?, ?, ?, ?)", 
    [req.body.first_name, req.body.last_name, req.body.employee_ID, req.body.title, req.body.department, req.body.salary], 
    function(err, result) {
      res.json({ id: result.insertId });
      res.redirect("/");
    });
  });
  

//====== UPDATED DATA 

//====== UPDATED  DATA
//UPDATE EMPLOYEE INFORMATION
router.put("/api/update/:id", function(req, res) {
    serverLink.query("UPDATE employees SET first_name = ?, last_name = ?, employee_ID = ?, title = ?, department = ?, salary = ? WHERE id = ?",
      [req.body.first_name, req.body.last_name, req.body.employee_ID, req.body.title, req.body.department, req.body.salary, req.params.id],
      function(err, result) {
        if (err) {
          // If an error occurred, send a generic server failure
          return res.status(500).end();
        }
        else if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });


//====== UPDATED DATA
  
//   router.delete("/api/quotes/:id", function(req, res) {
//     serverLink.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
//       else if (result.affectedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
  
//     });
//   });
  


  module.exports = router;
