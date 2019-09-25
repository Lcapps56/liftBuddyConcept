//gather all Routine info when page loads and populate for each individual workout
$.ajax({
    type: "GET",
    url: "/api/retreiveR"
}).then(function(response){
    // for each response, make a new HTML section
    for(let i=0; i<response.length; i++){ 
        var newDiv = $("<div id ='workoutBox'></div>")
        var newTitle = $("<h1 class='Rtitle'>" + response[i].Title + "</h1>")
        var newMuscles = $("<p class='Rmuscles'> <b>Muscle group:</b> " + response[i].Muscles + "</p>")
        var newDifficulty = $("<p class='Rdifficulty'> <b>Difficulty:</b> " +  response[i].Difficulty + "/10</p>")
        var newButton = $("<a class='viewWorkout' id='view' data-title='"+ response[i].Title +"' muscles='"+ response[i].Muscles +"' diff='"+ response[i].Difficulty +"' notes='"+ response[i].Notes +"'><button>View workout</button></a>")
        newDiv.append(newTitle, newMuscles, newDifficulty, newButton)
        $("#myworkouts").append(newDiv)
    }
    console.log(response)
})
// when user clicks view
$(document).on("click", ".viewWorkout", function(){ 
    // empty the text from before
    $("#modalText").empty()
    // create global variables to be used inside the ajax function
    var thisM = $(this).attr("muscles")
    var thisD = $(this).attr("diff")
    var thisN = $(this).attr("notes")
        // open the modal (doesnt work 100% correctly tho)
        $(this).attr({
            href: "#ex1", 
            rel: "modal:open"
        })    
        // call to database to get the correct routine for the one that was clicked
            $.ajax({
                type: "GET",
                url: "/api/Routine/"+ $(this).data("title")
            }).then(function(response){
                console.log(response)
                // populate the modal with the Other info using the global variables
                var newName = $("<input id='Mname' class='Other' placeholder='"+response[0].Title+"'></input>")
                var newMuscles = $("<input id='Mmuscles' class='Other' placeholder='Muscles: "+thisM+"'></input>")
                var newDiff = $("<input id='Mdiff' class='Other' placeholder='Difficulty: "+thisD+"'></input>")
                var newNotes = $("<input id='Mnotes' class='Other' placeholder='Notes: "+thisN+"'></input><hr>")
                $("#modalText").append(newName, newMuscles, newDiff, newNotes)

                // populate the modal with the response from the ajax call for the Routine
                for(let i=0; i<response.length; i++){
                    var newType = $("<input id='Mtype' class='Other' placeholder='"+response[i].Type+"'></input>")
                    var newSet = $("<input id='MSet' class='Other' placeholder='Sets: "+response[i].Sets+"'></input>")
                    var newRep = $("<input id='MRep' class='Other' placeholder='Reps: "+response[i].Reps+"'></input>")
                    var newWeight = $("<input id='Mweight' class='Other' placeholder='Weight: "+response[i].Weight+"'></input>")
            
                    $("#modalText").append(newType, newSet, newRep, newWeight)
                }
            })
})

$("#modalClose").on("click", function(){
    $("#modalText").empty()
})










      




