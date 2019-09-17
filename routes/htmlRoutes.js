var path = require("path")

module.exports = function(app){
    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "../public/Home.html"))
    })
    app.get("/form", function(req, res){
        res.sendFile(path.join(__dirname, "../public/Form.html"))
    })
    app.get("/calendar", function(req, res){
        res.sendFile(path.join(__dirname, "../public/Calendar.html"))
    })
}