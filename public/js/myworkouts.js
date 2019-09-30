var what
$("#C").css("text-decoration", "underline")

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
                var Otherdiv = $("<div class='Otherdiv'></div>")
                var newName = $("<h1 id='Mname' class='Other'><b>Name: "+response[0].Title+"</b></h1><hr>")
                var newMuscles = $("<p id='Mmuscles' class='Other'>Muscle group: "+thisM+"</p>")
                var newDiff = $("<p id='Mdiff' class='Other'>Difficulty: "+thisD+"/10</p>")
                var newNotes = $("<p id='Mnotes' class='Other'>Notes: "+thisN+"</p><hr>")
                Otherdiv.append(newName, newMuscles, newDiff, newNotes)
                $("#modalText").append(Otherdiv)

                // populate the modal with the response from the ajax call for the Routine
                for(let i=0; i<response.length; i++){
                    var Rdiv = $("<div class='routine'></div>")
                    var newType = $("<h4 class='Mtype' class='ROther'>"+response[i].Type+"</h4>")
                    var newSet = $("<p id='MSet' class='ROther'>Sets: "+response[i].Sets+"</p>")
                    var newRep = $("<p id='MRep' class='ROther'> Reps: "+response[i].Reps+"</p>")
                    var newWeight = $("<p id='MWeight' class='ROther'>Weight: "+response[i].Weight+"</p>")
                    Rdiv.append(newType, newSet, newRep, newWeight)
                    
                    $("#modalText").append(Rdiv)
                    n++
                }
            })
})

$("#modalClose").on("click", function(){
    $("#modalText").empty()
})

$(document).on("click", "#delete", function(){
    console.log($(this).data("title"))
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









      




