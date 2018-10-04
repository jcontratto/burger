
//Require express NPM
var express = require("express");
//express route
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes 
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.all(function (burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

//Post function
router.post("/burgers/create", function (req, res) {
  // console.log('route hit')
  burger.create([req.body.burger_name], function (result) {
    console.log(result);
    res.redirect("/");
  });
});

//PUT function
router.put("/burgers/:id", function (req, res) {
  //console.log("condition", condition);
 console.log("burger id here" + req.params.id);
  //Update new burger function
  burger.update(req.params.id, function (result) {
    console.log(result);
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
