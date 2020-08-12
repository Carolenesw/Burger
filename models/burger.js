// require ORM to create functions that will interact with the database
const orm = require("../config/orm");

const burgers = {
  selectAll: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  // add new burger 
  insert: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // update/change burger status
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller 
module.exports = burgers;

