// require relavant express packages
const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 8000;

// required routes module to acces data
const routes = require("./controllers/burger_controller")

// use to serve static files/content from the "public" directory in the directory.
app.use(express.static("public"));

// use to parse application body as JSON filex
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars handlers
const exphbs = require("express-handlebars");

// path to layout folder
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

// add routes to connect to contoller module
app.use(routes)

// start server to allow it to begin listening to client requests.
app.listen(PORT, function () {
  
  console.log("Server listening on: http://localhost:" + PORT);
});
