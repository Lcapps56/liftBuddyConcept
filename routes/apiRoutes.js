var Workout = require("../database/workout.js")

module.exports = function(app){
    app.post("/api/workout", function(req, res) {
        console.log(req.body.workout)  
        
        
    d = new Date()
    var year = d.getFullYear()
    var year = String(year)
    var year = year.substring(2)
    var month = d.getMonth()
    var month = "0" + parseInt(month + 1)
    if (month.length === 3){
        month = d.getMonth + 1
    }
    var day = d.getDate()
    var dateT = year + "-" + month + "-" +  day
    var date = dateT.toString()

    
    for(let i=0; i<req.body.workout.length; i++){
        Workout.create({
            Date: date,
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

    app.get("/api/retrieve", function(req, res){
        console.log("heard")
        Workout.findAll({}).then(function(response){
            res.json(response)
        })
    })
}