const mysql = require("mysql");

// set up database connection using JAWSDB_URL
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  // // set up connection to sql server and database
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db",
  });
}


  // create function to handle connection
  connection.connect()
  
  // connection.connect(function (err) {
  //   if (err) {
  //     console.error("error connecting: " + err.stack);
  //   }
  
  //   console.log("DB connection established id: " + connection.threadId);
  
  //   });


// Export connection for our ORM to use.
module.exports = connection;