var n = 0;


$("#submit").on("click", function (event) {
    event.preventDefault()
    //checks the muscles checkbox to create array of muscle groups chosen
    var muscles = [];
    $.each($("input[name='muscle']:checked"), function () {
        muscles.push($(this).val());
    });

    //that object that will be passed into the database
    var workoutForm = {
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