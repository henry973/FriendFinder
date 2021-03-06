var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var jsonParser =bodyParser.json()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  