onLoad()
whenClick() 

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
            }
        })
    })
}
function whenClick(){
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
                //logic to conver 24 hour time to 12 hour time
                var Time1 = timeConvert(response[0].StartTime)
                var Time2 = timeConvert(response[0].EndTime)
                // put the SQL data in the modal
                var title = $("<h1>Your Workout</h1>")
                var newDivO = $("<div class='workoutOther clearfix'></div>")
                var newMuscles = $("<h3>Muscle group: "+ response[0].Muscles + "</h3><hr>")
                var newStart = $("<p class='category' >"+ "Start time: " + Time1 + "</p>")
                var newEnd = $("<p class='category' >"+ "End time: " + Time2 + "</p>")
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
}

//logic to conver 24 hour time to 12 hour time
function timeConvert (timeOne){
    var time = (timeOne).toString()
    H = time.substring(0, 2)
    if(parseInt(H) >= "12"){
        time = time.substring(2, 7)
        H = parseInt(H-12)
        H.toString()
        time = H + time
    } else {
        return time
    }
    return time
}