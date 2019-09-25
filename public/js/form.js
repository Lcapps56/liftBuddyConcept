var n = 0;


$( function() {
    $( "#datepicker" ).datepicker();
  } );
var thisDate = new Date
var thisMonth = "0" + parseInt(thisDate.getMonth() + 1)
var thisDay = thisDate.getDate()
console.log(thisDay)

$("#submit").on("click", function (event) {
    event.preventDefault()
    //logic to convert date to correct format and use everywhere else
    let Sdate = $("#datepicker").val()
    console.log(Sdate)
    let Y = Sdate.substring(6, 10)
    let M = Sdate.substring(0, 2)
    var D = Sdate.substring(3, 5) 
    if(D[0] === "0" ){
        D = D.substring(1)
    }
    console.log("D: " + D)
    var date = Y + "-" + M + "-" + D
    console.log(date)

//   VALIDATIONS
    if(M > thisMonth || D > thisDay){
        alert("cannot input a future day")
    } else {

    //checks the muscles checkbox to create array of muscle groups chosen
    var muscles = [];
    $.each($("input[name='muscle']:checked"), function () {
        muscles.push($(this).val());
    });

    //that object that will be passed into the database
    var workoutForm = {
        Date: date,
        muscles: (muscles).toString(),
        startTime: ($("#startTime").val()).toString(),
        endTime: ($("#endTime").val()).toString(),
        restTime: ($("#restTime").val()).toString(),
        satisfaction: ($("input[name='inlineRadioOptions']:checked").val()).toString(),
    }
    console.log(workoutForm)
    
    // send the Other info into the database
    $.ajax({
        type: "POST",
        data: {workoutForm: workoutForm},
        url: "/api/workoutOther",
    }).then(function(){
        console.log("sent to server")
    })
    // ===================================

    //taking the values of the workouts 
    var workoutArr = []
    for (let i = 0; i < n + 1; i++) {
        workoutObject = {
            Date: date,
            type: $("#Type" + i + "").val(),
            sets: $("#Sets" + i + "").val(),
            reps: $("#Reps" + i + "").val(),
            weight: $("#Weight" + i + "").val()
        }
        workoutArr.push(workoutObject)
    }
    console.log(workoutArr)
    
    // sending the workout object to the server
    $.ajax({
        type: "POST",
        data: {workout: workoutArr},
        url: "/api/workout",
    }).then(function(){
        console.log("sent to server")
    })
    }   
    location.replace('http://localhost:8081/home')
})

//adding new field to add a new workout
$("#newField").on("click", function (event) {
    n = n + 1;
    var newrow = $("<div class='row'></div>")
    var newType = $("<div class='col'><input id='Type" + n + "' type='text' class='form-control' placeholder='Type'></div>")
    var newSet = $("<div class='col'><input id='Sets" + n + "' type='text' class='form-control' placeholder='Sets'></div>")
    var newReps = $("<div class='col'><input id='Reps" + n + "' type='text' class='form-control' placeholder='Reps'></div>")
    var newWeight = $("<div class='col'><input id='Weight" + n + "' type='text' class='form-control' placeholder='Weight'></div>")
    newrow.append(newType, newSet, newReps, newWeight)
    $("#workout").append(newrow)
})