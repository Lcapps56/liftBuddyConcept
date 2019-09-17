// require the workout model that was made in sequelize

module.exports = function(app){
    app.post("/api/workout", function(req, res) {
        console.log("received at server")
        console.log(req.body)
    });
}