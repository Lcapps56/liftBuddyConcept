var n = 0;


$("#submit").on("click", function (event) {
    event.preventDefault()
    //checks the muscles checkbox to create array of muscle groups chosen
    var muscles = [];
    $.each($("input[name='muscle']:checked"), function () {
        muscles.push($(this).val());
    });

    //that routine Other that will be passed into the database
    var createForm = {
        title: ($("#workoutName").val().toString()),
        muscles: (muscles).toString(),  
        difficulty: ($("input[name='inlineRadioOptions']:checked").val()).toString(),
        notes: ($("#notes").val().toString())
    }
    console.log(createForm)
    $.ajax({
        type: "POST",
        data: {createForm: createForm},
        url: "/api/routineOther",
    }).then(function(){
        console.log("routines Other sent to server")
    })

    // ===========================================================
    //the routine
    var routine = []
    for (let i = 0; i < n + 1; i++) {
        workoutObject = {
            title: ($("#workoutName").val().toString()),
            type: $("#Type" + i + "").val(),
            sets: $("#Sets" + i + "").val(),
            reps: $("#Reps" + i + "").val(),
            weight: $("#Weight" + i + "").val()
        }
        routine.push(workoutObject)
    }
    console.log(routine)
    $.ajax({
        type: "POST",
        data: {routine: routine},
        url: "/api/routine",
    }).then(function(){
        console.log("routine sent to server")
    })
    location.replace('http://localhost:8081/myworkouts')
})


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