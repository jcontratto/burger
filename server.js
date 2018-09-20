//express require NPM
var express = require("express");
//body-parser require NPM
var bodyParser = require("body-parser");
//Port
var PORT = process.env.PORT || 8093;

var app = express();

//Static erver content for Public folder
app.use(express.static("Public"));

app.use(bodyParser.urlencoded({ extended: true }));

//Parse for application for json
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defualtLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give access to those routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//This starts the server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
