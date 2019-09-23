$.ajax({
    type: "GET",
    url: "/api/retreiveR"
}).then(function(response){
    for(let i=0; i<response.length; i++){        
        var newDiv = $("<div id ='workoutBox'></div>")
        var newTitle = $("<h1 class='Rtitle'>" + response[i].Title + "</h1>")
        var newMuscles = $("<p class='Rmuscles'> <b>Muscle group:</b> " + response[i].Muscles + "</p>")
        var newDifficulty = $("<p class='Rdifficulty'> <b>Difficulty:</b> " +  response[i].Difficulty + "/10</p>")
        var newButton = $("<button onClick=button("+response[i].Title+") data-title='"+ response[i].Title +"'>View workout</button>")
        $(newDiv).append(newTitle, newMuscles, newDifficulty, newButton)
        $("#myworkouts").append(newDiv)
    }
    console.log(response)
})

function button(title){
    console.log(title)
    // modal text
    // $.ajax({
    //     type: "GET", 
    //     url: "/api/Rmodal/" + title
    // }).then(function(response){
    //     console.log("========")
    //     console.log(response)
    //     console.log("========")
    // })
}
    












      




