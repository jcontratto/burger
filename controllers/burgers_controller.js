//Require express NPM
var express = require("express");
//express route
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
// Create all our routes 
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//Post function
router.post("/api/burgers", function(req, res) {
  console.log('route hit')
  burger.create([req.body.name], function(result) {
// Send back the ID
res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
//console.log("condition", condition);
//Update new burger function
  burger.update(req.body, condition, function(result) {
    devoured: true // req.body.devour
  }, condition, function(data) {
   
    if (result.changedRows == 0) {
      //Give error if routes dont exist
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// Export routes for server.js 
module.exports = router;
