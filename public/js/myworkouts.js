var what 
//gather all Routine info when page loads and populate for each individual workout
$.ajax({
    type: "GET",
    url: "/api/retreiveR"
}).then(function(response){
    // for each response, make a new HTML section
    what = response[0].Title
    for(let i=0; i<response.length; i++){ 
        var newDiv = $("<div id ='workoutBox'></div>")
        var newTitle = $("<h1 class='Rtitle'>" + response[i].Title + "</h1>")
        var newMuscles = $("<p class='Rmuscles'> <b>Muscle group:</b> " + response[i].Muscles + "</p>")
        var newDifficulty = $("<p class='Rdifficulty'> <b>Difficulty:</b> " +  response[i].Difficulty + "/10</p>")
        var newButton = $("<a class='viewWorkout' id='view' data-title='"+ response[i].Title +"' muscles='"+ response[i].Muscles +"' diff='"+ response[i].Difficulty +"' notes='"+ response[i].Notes +"'><button>View workout</button></a>")
        var newdelete = $("<button id='delete' data-title='"+response[i].Title+"'>Delete</button>")
        newDiv.append(newTitle, newMuscles, newDifficulty, newButton, newdelete)
        $("#myworkouts").append(newDiv)
    }
    console.log(response)
})
var n = 0
// when user clicks view
$(document).on("click", ".viewWorkout", function(){ 
    // empty the text from before
    $("#modalText").empty()
    n=0
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
                var newName = $("<input id='Mname' class='Other newO' placeholder='"+response[0].Title+"'></input>")
                var newMuscles = $("<input id='Mmuscles' class='Other newO' placeholder='"+thisM+"'></input>")
                var newDiff = $("<input id='Mdiff' class='Other newO' placeholder='"+thisD+"'></input>")
                var newNotes = $("<input id='Mnotes' class='Other newO' placeholder='"+thisN+"'></input><hr>")
                $("#modalText").append(newName, newMuscles, newDiff, newNotes)

                // populate the modal with the response from the ajax call for the Routine
                for(let i=0; i<response.length; i++){
                    var newType = $("<input id='Mtype" + n + "' class='Other new' placeholder='"+response[i].Type+"'></input>")
                    var Rdiv = $("<div class='routine'></div>")
                    var newSet = $("<h4>Sets: </h4><input id='MSet" + n + "' class='ROther new' placeholder='"+response[i].Sets+"'></input>")
                    var newRep = $("<h4>Reps: </h4><input id='MRep" + n + "' class='ROther new' placeholder='"+response[i].Reps+"'></input>")
                    var newWeight = $("<h4>Weight: </h4><input id='MWeight" + n + "' class='ROther new' placeholder='"+response[i].Weight+"'></input>")
                    $(Rdiv).append(newSet, newRep, newWeight)
                    $("#modalText").append(newType, Rdiv)
                    n++
                }
            })
})

$("#modalClose").on("click", function(){
    $("#modalText").empty()
})

$(document).on("click", "#delete", function(){
    $.ajax({
        type: "DELETE",
        url: "/api/delRoutine/"+ $(this).data("title")
    }).then(function(){
        console.log("Request to delete Routine has been made")
    })
    location.reload()
})
// $(document).on("click", "#save", function(){ 
//     var OtherObject = []
//     $(".newO").each(function(){
//         if($(this).val() === ""){
//             $(this).val($(this).attr("placeholder"))
//         }
       
//     })
//     var RoutineOther = {
//         newName: $("#Mname").val(),
//         newMuscles: $("#Mmuscles").val(),
//         newDiff: $("#Mdiff").val(),
//         newNotes: $("#Mnotes").val() 
//     }
//     OtherObject.push(RoutineOther)
//     console.log(OtherObject)

//     $.ajax({
//         type: "POST",
//         data: {info: OtherObject[0]},
//         url: "/api/updateRO/" + (what).replace(" ", "_")
//     }).then(function(){
//         console.log("THE OBJECT: " + RoutineOther)
//     })

//     var RoutineNew = []
//     for(let i=0; i<n; i++){
//         RoutineObject = {
//             newType: $("#Mtype"+i+"").val(),
//             newSet: $("#MSet"+i+"").val(),
//             newRep: $("#MRep"+i+"").val(),
//             newWeight: $("#MWeight"+i+"").val()
//         }
//         RoutineNew.push(RoutineObject)
//     }

//     $.ajax({
//         type: "POST",
//         data: {Routine: RoutineNew},
//         url: "/api/updateRN/"+ (what).replace(" ", "_")
//     }).then(function(){
//         console.log("new Routine Sent to server for update")
//     })
// })









      




