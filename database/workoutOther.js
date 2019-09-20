var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var WorkoutOther = sequelize.define("workoutOther", {
    Date: Sequelize.STRING,
    Muscles: Sequelize.STRING,
    StartTime: Sequelize.STRING,
    EndTime: Sequelize.STRING,
    RestTime: Sequelize.STRING,
    Satisfaction: Sequelize.INTEGER
})
WorkoutOther.sync()

module.exports = WorkoutOther