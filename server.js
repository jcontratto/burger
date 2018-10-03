var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8093;

var app = express();

// Serve static content for the app from the "public" directory 
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Setting handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Give access to imported routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server
app.listen(PORT, function () {

  console.log("Server listening on: http://localhost:" + PORT);
});
