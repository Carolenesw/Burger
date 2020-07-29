const connection = require("./connection");

// create function to loops through and creates an array of question marks for table values
function selectTableValue(num) {
    let arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  
// create function to convert object key to SQL syntax
function objectToSql(ob) {
   let arr = [];
  
    // loop through the keys and push the value as a string into the arr
    for (var key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
     
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }



// Export the orm object for the model
module.exports = orm;