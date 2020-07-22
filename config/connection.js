const mysql = require("mysql");

// set up connection to mysql server and database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql",
    database: "burgers_db",
  });
  
  // create function to handle connection
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }
  
    console.log("DB connection established id: " + connection.threadId);
  
    });


// Export connection for our ORM to use.
module.exports = connection;