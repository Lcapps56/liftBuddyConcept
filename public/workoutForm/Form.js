//(done)grab the values of the checkkbox for the muscles
//(done)create the new workout section after add button
//-- (later) save the textbox values into some kind of text that can be edited/deleted 
//(not done)format Date.now()
//(not done)total time calulations?
//(not done) fix the todays date input

//(not done, Daniel)figure out database structure 
//finish creating object

//send an object into the database

//newfile where i pull from the database and show to the user in strutured form




$("#submit").on("click", function(event){
    event.preventDefault()
    //checks the muscles checkbox to create array of muscle groups chosen
    var muscles = [];
    $.each($("input[name='muscle']:checked"), function(){            
        muscles.push($(this).val());
    });

    //that object that will be passed into the database
    // var workout = {
    //     date: Date.now(),
    //     muscles: muscles,
    //     the workouts go here
    //     var startTime= $("#startTime").val()
    //     var endTime= $("endTime").val()
    //     restTime: $("#restTime").val(),
    //     satisfaction: $("input[name='inlineRadioOptions']:checked").val(),
    // }    

    // creates the table for the workouts after the submit button is clicked 
    var newWorkoutRow = $("<tr>").append(
        $("<td id='formType'>").text(train_Name),
        $("<td>").text(train_destination),
        $("<td>").text(train_frequency),
        $("<td>").text(arrival_time),
        $("<td>").text(minutesAway_Away)
      );
    $("#workout-table").append(newWorkoutRow)
    
})

//adding new field to add a new workout
$("#newField").on("click", function(event){
    var newrow = $("<div class='row'></div>")
    var newType = $("<div class='col'><input id='type' type='text' class='form-control' placeholder='Type'></div>")
    var newSet = $("<div class='col'><input id='Sets' type='text' class='form-control' placeholder='Sets'></div>")
    var newReps = $("<div class='col'><input id='Reps' type='text' class='form-control' placeholder='Reps'></div>")
    var newWeight = $("<div class='col'><input id='Weight' type='text' class='form-control' placeholder='Weight'></div>")
    newrow.append(newType, newSet, newReps, newWeight)
    $("#workout").append(newrow)
})

