const config = require("../config/db.config.js");

//initialize mysql2
const mysql = require("mysql2")
//connection mysql
const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB,
});

//database connection error handling
connection.connect(error => {
  if(error) throw error;
  console.log("Successfully connected to the database");
});

//export db connection
module.exports = connection;