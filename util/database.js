const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs", "root", "batho123", {
  dialect: "mysql",
  host: "localhost"});

module.exports =sequelize;
