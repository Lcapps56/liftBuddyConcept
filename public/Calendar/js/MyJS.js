onLoad()
// when th euser clicks a calendar date
$("a").on("click", function(event){
    onLoad()
    calendar()
})

$("#next").on("click", function(event){
    onLoad()
    calendar()
})
$("#prev").on("click", function(event){
    onLoad()
    calendar()
})
$("#modalClose").on("click", function(event){
    $("#modalText").empty()
})


function onLoad(){
    $.ajax({
        type: "GET",
        url: "/api/retrieve"
    }).then(function(response){
        console.log(response)
        for (let i=0; i<response.length; i++)
        $("a").each(function(){   
            if($(this).attr("data-id") === response[i].Date){    
                $(this).data("hasWorkout", true)
                $(this).css("background", "#b3c4ff")
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
        // if it does
        // gather the SQL info for that date
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