var Workout = require("../database/workout.js")
var WorkoutOther = require("../database/workoutOther.js")
var Routine = require("../database/routine.js")
var RoutineOther = require("../database/routineOther.js")


module.exports = function (app) {
    //workout Other seeds
    WorkoutOther.bulkCreate([
        {
            Date: "2019-09-3",
            Muscles: "Legs",
            StartTime: "19:30PM",
            EndTime: "20:30PM",
            RestTime: "12",
            Satisfaction: "6"
        },
        {
            Date: "2019-09-12",
            Muscles: "Arms, Chest",
            StartTime: "19:30PM",
            EndTime: "20:30PM",
            RestTime: "17",
            Satisfaction: "8"
        }
    ]).then(function () {
        console.log("workout Other seed inserted into database")
    })
    //workout seeds
    Workout.bulkCreate([
        //seeds for september 3
        {
            Date: "2019-09-3",
            Type: "Squats",
            Sets: "3",
            Reps: "10",
            Weight: "160"
        },
        {
            Date: "2019-09-3",
            Type: "Hamstring Curls",
            Sets: "3",
            Reps: "12",
            Weight: "80"
        },
        {
            Date: "2019-09-3",
            Type: "Calf raises",
            Sets: "3",
            Reps: "10",
            Weight: "100"
        },
        {
            Date: "2019-09-3",
            Type: "Leg press",
            Sets: "3",
            Reps: "10",
            Weight: "250"
        },
        // seeds for september 12
        {
            Date: "2019-09-12",
            Type: "Bench",
            Sets: "3",
            Reps: "8",
            Weight: "150"
        },
        {
            Date: "2019-09-12",
            Type: "Flys",
            Sets: "3",
            Reps: "8",
            Weight: "50"
        },
        {
            Date: "2019-09-12",
            Type: "curls",
            Sets: "3",
            Reps: "8",
            Weight: "35"
        },
        {
            Date: "2019-09-12",
            Type: "Press",
            Sets: "3",
            Reps: "8",
            Weight: "250"
        }
    ]).then(function () {
        console.log("workout seed inserted into database")
    })
    //Routine Seeds
    Routine.bulkCreate([
        {
            Title: "The First",
            Type: "Push ups",
            Sets: "3",
            Reps: "10",
            Weight: "0"
        },
        {
            Title: "The First",
            Type: "Sit ups",
            Sets: "3",
            Reps: "10",
            Weight: "0"
        },
        {
            Title: "The First",
            Type: "Pull ups",
            Sets: "4",
            Reps: "10",
            Weight: "0"
        }
    ]).then(function(){
        console.log("Routine seed entered into database")
    })
    RoutineOther.bulkCreate([
        {
            Title: "The First",
            Muscles: "Arms",
            Difficulty: "3",
            Notes: "None for now"
        }
    ]).then(function(){
        console.log("Routines Other seed entered into database")
    })

    // when the form submits, put the workout into the database
    app.post("/api/workout", function (req, res) {
        console.log("/api/workout is HIT")
        // logic for creating the correct date format 
    
        for (let i = 0; i < req.body.workout.length; i++) {
            Workout.create({
                Date: req.body.workout[i].Date,
                Type: req.body.workout[i].type,
                Sets: req.body.workout[i].sets,
                Reps: req.body.workout[i].reps,
                Weight: req.body.workout[i].weight
            }).then(function (response) {
                console.log("Forms workout entered into database")
                // res.json(response)
            })
        }
    });
    // when the form submits, put the other information into the other database table
    app.post("/api/workoutOther", function (req, res) {
        console.log("/api/workoutOther is HIT")
        //logic for creating the correct date format
        

        WorkoutOther.create({
            Date: req.body.workoutForm.Date,
            Muscles: req.body.workoutForm.muscles,
            StartTime: req.body.workoutForm.startTime,
            EndTime: req.body.workoutForm.endTime,
            RestTime: req.body.workoutForm.restTime,
            Satisfaction: req.body.workoutForm.satisfaction
        }).then(function () {
            console.log("Forms other entered into the database")
        })
    })
    //when the user completes the "create a routine" form and sends it, the routine comes here
    app.post("/api/routine", function (req, res) {
        for (let i = 0; i < req.body.routine.length; i++) {
            Routine.create({
                Title: req.body.routine[i].title,
                Type: req.body.routine[i].type,
                Sets: req.body.routine[i].type,
                Reps: req.body.routine[i].reps,
                Weight: req.body.routine[i].weight,
            }).then(function () {
                console.log("routine entered into the database")
            })
        }
    })
    app.post("/api/routineOther", function(req, res){
        RoutineOther.create({
            Title: req.body.createForm.title,
            Muscles: req.body.createForm.muscles,
            Difficulty: req.body.createForm.difficulty,
            Notes: req.body.createForm.notes
        }).then(function(){
            console.log("routine Other entered into the database")
        })
    })
    // when the calendar page loads, gather all data
    app.get("/api/retrieve", function (req, res) {
        console.log("heard")
        WorkoutOther.findAll({}).then(function (response) {
            res.json(response)
        })
    })
    // when the user clicks a specific date, gather that dates workout for the modal
    app.get("/api/modal/:date", function (req, res) {
        Workout.findAll({
            where: {
                Date: req.params.date
            }
        }).then(function (response) {
            res.json(response)
        })
    })
    //same as one above but for the Other info
    app.get("/api/modalOther/:date", function (req, res) {
        WorkoutOther.findAll({
            where: {
                Date: req.params.date
            }
        }).then(function (response) {
            res.json(response)
        })
    })
    // when the "my workouts" page loads, gather all Routine Other data
    app.get("/api/retreiveR", function(req, res){
        RoutineOther.findAll({}).then(function(response){
            res.json(response)
        })
    })
    app.get("/api/Routine/:title", function(req, res){
        console.log("HEY THIS ROUTE WAS HIT")
        Routine.findAll({
            where: {
                Title: req.params.title
            }
        }).then(function(response){
            console.log(response)
            res.json(response)
        })
    })
}