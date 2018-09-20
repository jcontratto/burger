//NPM express
var express = require("express");

//Router
var router = express.Router();

//Import burger.hs for database
var burger = require("../models/burger.js");

//Create all of our routes
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//POST
router.post("/api/burger", function (req, res) {
    console.log("route hit!")
    burger.create([req.body.name], function (result) {
        //send back ID
        res.json({ id: result.insertId });
    });
});

//PUT routes
router.put("/api/burger/ :id", function (req, res) {
    var condition = "id = " + req.params.id;
    //console.log("condition", condition);

    //Update for burger
    burger.update(req.body, condition, function (result) {
        devoured: true
    },// req.body.devour
        condition, function (data) {
            if (result.changedRows == 0) {
                //Giver err if routes dont exist
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });

});

//Delete
router.delete("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            //Give error for rows that arent changed
            return res.status(404).end();
        } else {
            res.status(200).end();
        }

    });
});

//Export routes for server.js
module.exports = router;
