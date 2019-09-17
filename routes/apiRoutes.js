var Workout = require("../database/workout.js")

module.exports = function(app){
    app.post("/api/workout", function(req, res) {
        console.log("received at server")
        console.log(req.body)
    });
}