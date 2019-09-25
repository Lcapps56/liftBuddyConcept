var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Routine  = sequelize.define("routine", {
    Title: Sequelize.STRING,
    Type: Sequelize.STRING,
    Sets: Sequelize.STRING,
    Reps: Sequelize.STRING,
    Weight: Sequelize.STRING
  });
  
  Routine.sync();
  
  module.exports = Routine;