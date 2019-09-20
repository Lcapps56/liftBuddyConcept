onLoad()
// when th euser clicks a calendar date
$(".day a").on("click", function(event){
    if($(this).data("hasWorkout") === true){
        // open the modal
        $(this).attr({
            href: "#ex1", 
            rel: "modal:open"
        })
       
        //gather the workout Other SQL info for the date clicked
        $.ajax({
            type: "GET",
            url: "/api/modalOther/" + $(this).attr("data-id")
        }).then(function(response){
            console.log("===========")
            console.log(response)
            console.log("=============")
            // put the SQL data in the modal
            var title = $("<h1>Your Workout</h1>")
            var newDivO = $("<div class='workoutOther clearfix'></div>")
            var newMuscles = $("<h4>Muscle group: "+ response[0].Muscles + "</h4><hr>")
            var newStart = $("<p class='category' >"+ "Start time: " + response[0].StartTime + "</p>")
            var newEnd = $("<p class='category' >"+ "End time: " + response[0].EndTime + "</p>")
            var newRest = $("<p class='category' >"+ "Total rest: " + response[0].RestTime + "</p>")
            var newSatis = $("<p class='category' >"+ "Satisfaction: " + response[0].Satisfaction + "</p><hr>")
            $(newDivO).append(title, newMuscles, newStart, newEnd, newRest, newSatis)
            $("#modalText").append(newDivO)
        }) 
        // gather the workout SQL info for the date clicked
        $.ajax({
            type: "GET", 
            url: "/api/modal/" + $(this).attr("data-id") 
        }).then(function(response){        
            console.log("===========")
            console.log(response)
            console.log("=============")
            // put the SQL data in the modal
            for(let i=0; i<response.length; i++){
                var newDiv = $("<div class='workout'></div>")
                var newType = $("<h6>"+ response[i].Type + "</h6>")
                var newSets = $("<p class='category' >"+ "Sets: " + response[i].Sets + "</p>")
                var newReps = $("<p class='category' >"+ "Reps: " + response[i].Reps + "</p>")
                var newWeight = $("<p class='category' >"+ "Weight: " + response[i].Weight + "</p>")
                $(newDiv).append(newType, newSets, newReps, newWeight)
                $("#modalText").append(newDiv)
            }
        })
    } else {

    }
})

$("#next").on("click", function(event){
    onLoad()   
})
$("#prev").on("click", function(event){
    onLoad()
})
$("#modalClose").on("click", function(event){
    $("#modalText").text("")
})
$("a #buttonNew").on("click", function(){
    alert($(this).attr("date"))
    $(this).attr({
        href: "#ex1", 
        rel: "modal:open"
    })
})


function onLoad(){
    // add a button to add a workout to that date
    $(".day a").each(function(){
        var button = $("<a date=" + $(this).data("id") + " id='buttonNew'>+</a>")
        $(this).append(button)
    })
    // gather all SQL data for date comparisons
    $.ajax({
        type: "GET",
        url: "/api/retrieve"
    }).then(function(response){
        console.log(response)
        for (let i=0; i<response.length; i++)
        $(".day a").each(function(){   
            if($(this).attr("data-id") === response[i].Date){    
                $(this).data("hasWorkout", true)
                $(this).css("background", "#b3c4ff")
                // make the + button go away
                // var newGroup = $("<div class='Mgroup'><p>"+response[i].Muscles+"</p></div>" )
                // $(this).append(newGroup)
            }
        })
    })
}

function calendar (){
    // check to see if it has a workout
    if($(this).data("hasWorkout") === true){
        // open the modal
        $(this).attr({
            href: "#ex1", 
            rel: "modal:open"
        })
        // gather the SQL info for the date clicked
        $.ajax({
            type: "GET", 
            url: "/api/modal/" + $(this).attr("data-id") ,
        }).then(function(response){        
            console.log("===========")
            console.log(response)
            console.log("=============")
            // put the SQL data in the modal
            for(let i=0; i<response.length; i++){
                var newDiv = $("<div class='workout'></div>")
                var newType = $("<h6>"+ response[i].Type + "</h6>")
                var newSets = $("<p class='category' >"+ "Sets: " + response[i].Sets + "</p>")
                var newReps = $("<p class='category' >"+ "Reps: " + response[i].Reps + "</p>")
                var newWeight = $("<p class='category' >"+ "Weight: " + response[i].Weight + "</p>")
                $(newDiv).append(newType, newSets, newReps, newWeight)
                $("#modalText").append(newDiv)
            }
        })
    } else {
    }
}