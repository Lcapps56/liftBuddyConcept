var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Workout  = sequelize.define("workout", {
    Date: Sequelize.STRING,
    Type: Sequelize.STRING,
    Sets: Sequelize.STRING,
    Reps: Sequelize.STRING,
    Weight: Sequelize.INTEGER
  });
  
  Workout.sync();
  
  module.exports = Workout;