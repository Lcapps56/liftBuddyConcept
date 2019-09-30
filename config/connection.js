var Sequelize = require("sequelize");


var sequelize = new Sequelize("b1tncoawj1gg9mum", "h53esj90mvatp4oq", "k61qzo0r2vfhze3z", {
    host: "g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
  
module.exports = sequelize;
