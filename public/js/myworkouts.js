var newCount = 0
$.ajax({
    type: "GET",
    url: "/api/retreiveR"
}).then(function(response){
    for(let i=0; i<response.length; i++){ 
       
        var newDiv = $("<div id ='workoutBox'></div>")
        var newTitle = $("<h1 class='Rtitle'>" + response[i].Title + "</h1>")
        var newMuscles = $("<p class='Rmuscles'> <b>Muscle group:</b> " + response[i].Muscles + "</p>")
        var newDifficulty = $("<p class='Rdifficulty'> <b>Difficulty:</b> " +  response[i].Difficulty + "/10</p>")
        var newButton = $("<a class='viewWorkout' count='"+0+"' id='view' data-title='"+ response[i].Title +"' muscles='"+ response[i].Muscles +"' diff='"+ response[i].Difficulty +"' notes='"+ response[i].Notes +"'><button>View workout</button></a>")
        newDiv.append(newTitle, newMuscles, newDifficulty, newButton)
        $("#myworkouts").append(newDiv)
    }
    console.log(response)
})

$(document).on("click", ".viewWorkout", function(){ 
    newCount++
    var thisM = $(this).attr("muscles")
    var thisD = $(this).attr("diff")
    var thisN = $(this).attr("notes")
    
    $(this).attr("count", newCount)

        $(this).attr({
            href: "#ex1", 
            rel: "modal:open"
        })    
        if($(this).attr("count") >= 2){

        $.ajax({
            type: "GET",
            url: "/api/Routine/"+ $(this).data("title")
        }).then(function(response){
            console.log(response)
            var newName = $("<input id='Mname' class='Other' placeholder='"+response[0].Title+"'></input>")
            var newMuscles = $("<input id='Mmuscles' class='Other' placeholder='Muscles: "+thisM+"'></input>")
            var newDiff = $("<input id='Mdiff' class='Other' placeholder='Difficulty: "+thisD+"'></input>")
            var newNotes = $("<input id='Mnotes' class='Other' placeholder='Notes: "+thisN+"'></input>")
            $("#modalText").append(newName, newMuscles, newDiff, newNotes)

            for(let i=0; i<response.length; i++){
                var newType = $("<h3>"+response[i].Type+"</h3>")
                var newSet = $("<p><b>Sets: </b>"+response[i].Sets+"</p>")
                var newRep = $("<p><b>Reps: </b>"+response[i].Reps+"</p>")
                var newWeight = $("<p><b>Weight: </b>"+response[i].Weight+"</p>")
        
                $("#modalText").append(newType, newSet, newRep, newWeight)
            }

        })
    } else {
        
    }
})

$("#modalClose").on("click", function(){
    $("#modalText").empty()
})









      




