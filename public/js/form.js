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
        date: Date.now(),
        muscles: muscles,
        startTime: $("#startTime").val(),
        endTime: $("endTime").val(),
        restTime: $("#restTime").val(),
        satisfaction: $("input[name='inlineRadioOptions']:checked").val(),
    }


    var workout = new Array(4);
    for (var i = 0; i < n + 1; i++) {
        workout[i] = new Array(4)
        workout[i]["type"] = $("#Type" + i + "").val(),
        workout[i]["sets"] = $("#Sets" + i + "").val(),
        workout[i]["reps"] = $("#Reps" + i + "").val(),
        workout[i]["weight"] = $("#Weight" + i + "").val()

    }
    console.log(workout)
    // sending the object to the server
    $.ajax({
        type: "POST",
        data: workout,
        url: "/api/workout"
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