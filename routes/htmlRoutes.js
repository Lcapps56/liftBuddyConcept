var path = require("path")

module.exports = function(app){
    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "../public/Calendar/index.html"))
    })
    app.get("/form", function(req, res){
        res.sendFile(path.join(__dirname, "../public/Form.html"))
    })
    app.get("/create", function(req, res){
        res.sendFile(path.join(__dirname, "../public/CreateForm.html"))
    })
    app.get("/myworkouts", function(req, res){
        res.sendFile(path.join(__dirname, "../public/myworkouts.html"))
    })
}