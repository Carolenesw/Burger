const express = require("express");

const router = express.Router();

const burgers = require("../models/burger.js");

// Create routes and set up logic
router.get("/", function (req, res) {
  burgers.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// create/add new burger for ajax call
router.post("/api/burgers", function (req, res) {
  console.log("Burger Name:", req.body);
  burgers.insert(["burger_name"], [req.body.burger_name], function (result) {
    // Send back the id of the new burger
    res.json({ id: result.insertId, message: "success" });
  });
});

// change burger status if devoured
router.put("/api/burgers/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition:", condition);

  burgers.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no changes ID doesn't exist, hence 404
        // console.log("Devoured:", devoured)
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js
module.exports = router;
