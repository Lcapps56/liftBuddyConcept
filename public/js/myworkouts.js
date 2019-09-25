
$.ajax({
    type: "GET",
    url: "/api/Routine"
}).then(function(response){
    console.log(response)
    var checkTitle = response[0].Title
    for(let i=0; i<response.length; i++){
        if(checkTitle === response[i].Title){
            //create new HTML elements
        } else {
            checkTitle = response[i].Title
            alert("the title has changed")
        }
    }
})


var checkTitle = response[i].Title
        // var firstTitle = checkTitle
        // if(checkTitle === firstTitle){
        //     //create the new HTML element
        // } else {
        //     //create the next HTML element
        // }
        // var newTitle = $("<div></div>")




// $.ajax({
//     type: "GET",
//     url: "/api/retreiveR"
// }).then(function(response){
//     console.log(response)
//     for(let i=0; i<response.length; i++){ 
//         //create one div for the entire response
//         var newDiv = $("<div id='Routine'></div>")
//             //creating the Routine other div
//             var ROtherDiv = $("<div id='Rother'></div>")
//                 // populating the Other div
//                 var newTitle = $("<h1 class='Rtitle'>" + response[i].Title + "</h1>")
//                 var newMuslces = $("<h3 class='Rmuscles'>"+response[i].Muscles+"</h3>")
//                 var newDiff = $("<h3 class='Rdiff'>"+response[i].Difficulty+"</h3>")
//                 var newNotes = $("<p class='Rnotes'>"+response[i].Notes+"</p>")
            
//                 $(ROtherDiv).append(newTitle, newMuslces, newDiff, newNotes)
//             $(newDiv).append(ROtherDiv)

//             // creating the Routine Workout Div
//             var RworkoutDiv = $("<div id='Rworkout'></div>")
//                 $.ajax({
//                     type: "GET", 
//                     url: "/api/Rmodal/" + response[i].Title
//                 }).then(function(response){
//                     for(let i=0; i<response.length; i++){
//                         var newType = $("<h1>"+response[i].Type+"</h1>")
//                         $(RworkoutDiv).append(newType)
//                     }
//                 })

//             $(newDiv).append(RworkoutDiv)

//         $("#myworkouts").append(newDiv)
//     }
// })









// $.ajax({
//     type: "GET",
//     url: "/api/retreiveR"
// }).then(function(response){
//     for(let i=0; i<response.length; i++){        
//         var newDiv = $("<div id ='workoutBox'></div>")
//         var newTitle = $("<h1 class='Rtitle'>" + response[i].Title + "</h1>")
//         var newMuscles = $("<p class='Rmuscles'> <b>Muscle group:</b> " + response[i].Muscles + "</p>")
//         var newDifficulty = $("<p class='Rdifficulty'> <b>Difficulty:</b> " +  response[i].Difficulty + "/10</p>")
//         var newButton = $("<a class='viewWorkout' id='view' data-title='"+ response[i].Title +"'><button>View workout</button></a>")
//         //the routine workouts
//         var nextDiv = $("<div id='routine'></div>")
//         $.ajax({
//             type: "GET", 
//             url: "/api/Rmodal/" + response[i].Title
//         }).then(function(response){
//             var newType = $("<p>"+response[0].type+"</p>")
//         })
//         // $(nextDiv).append(newType)
//         $(newDiv).append(newTitle, newMuscles, newDifficulty, newButton, nextDiv)

//         $("#myworkouts").append(newDiv)
        
//     }
//     console.log(response)
// })
// $(document).on("click", ".viewWorkout", function(){
//     $(this).attr({
//         href: "#ex1", 
//         rel: "modal:open"
//     })
//     $.ajax({
//         type: "GET",
//         url: "/api/retreiveR"
//     }).then(function(response){
//         var newName = $("<input id='Name' placeholder='"+response[0].Title+"'></input>")
//         var newMuscle = $("<input id='Muscle' placeholder='"+response[0].Muscles+"'></input>")
//         var newDiff = $("<input id='Muscle' placeholder='"+response[0].Difficulty+"'></input>")
//         $.ajax({
//             type: "GET", 
//             url: "/api/Rmodal/" + $(this).data("title")
//         }).then(function(response){
//             console.log("========")
//             console.log(response)
//             console.log("========")
//             //putting the data into the modal
//             // for(let i=0; i<response.length; i++){
//             //     var newType
//             //     var newSet
//             //     var newRep
//             //     var newWeight
//             // }
//             // var newNotes
//         })
//         $("#modalText").append(newName, newMuscle, newDiff)

//     })

//     $.ajax({
//         type: "GET", 
//         url: "/api/Rmodal/" + $(this).data("title")
//     }).then(function(response){
//         console.log("========")
//         console.log(response)
//         console.log("========")
//         //putting the data into the modal
//         // for(let i=0; i<response.length; i++){
//         //     var newType
//         //     var newSet
//         //     var newRep
//         //     var newWeight
//         // }
//         // var newNotes
//     })
// })
// $("#modalClose").on("click", function(){

//     $("#modalText").empty()
// })
    

    












      




