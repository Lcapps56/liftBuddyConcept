var express = require("express")
var app = express()
var path = require("path")

var PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

//HTML routes

require("./routes/htmlRoutes.js")(app)
require("./routes/apiRoutes.js")(app)

//API routes


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});