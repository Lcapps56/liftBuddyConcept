var Workout = require("../database/workout.js")

module.exports = function(app){
    app.post("/api/workout", function(req, res) {
        console.log(req.body.workout)        
            
    for(let i=0; i<req.body.workout.length; i++){
        Workout.create({
            Date: Date.now(),
            Type: req.body.workout[i].type,
            Sets: req.body.workout[i].sets,
            Reps: req.body.workout[i].reps,
            Weight: req.body.workout[i].weight
        }).then(function(response){
            console.log("entered into database")
            // res.json(response)
        })
    }
    });
}