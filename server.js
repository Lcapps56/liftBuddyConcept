var express = require("express")
var app = express()

var PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get("/", function(req, res){
    res.sendFile("./public/workoutForm/index.html")
})


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});