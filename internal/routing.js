const router = require("express").Router();
const connection = require("../server");
// Serve index.handlebars to the root route.
router.get("/", function(req, res) {
    connection.query("SELECT * FROM quotes;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { quotes: data });
    });
  });
  
  // Show the user the individual quote and the form to update the quote.
  router.get("/:id", function(req, res) {
    connection.query("SELECT * FROM quotes where id = ?", [req.params.id], function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      console.log(data);
      res.render("single-quote", data[0]);
    });
  });
  
  router.post("/api/employees", function(req, res) {
    connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [req.body.author, req.body.quote], function(
      err,
      result
    ) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
  
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
//   router.delete("/api/quotes/:id", function(req, res) {
//     connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
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
  
  // Update a quote by an id and then redirect to the root route.
  router.put("/api/quotes/:id", function(req, res) {
    connection.query(
      "UPDATE quotes SET author = ?, quote = ? WHERE id = ?",
      [req.body.author, req.body.quote, req.params.id],
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

  module.exports = router;
