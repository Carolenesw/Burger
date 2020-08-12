const express = require("express");

const router = express.Router();

const burgers = require("../models/burger.js");

// Create routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
})

router.post("/api/burgers", function(req, res) {
  console.log('Burger Name:', req.body);
  burgers.insert([
    "burger_name"], [req.body.burger_name],
   function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId, message: "success" });
  })
})

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition:", condition);

  burgers.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows are changed, then the ID does not exist, hence 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;