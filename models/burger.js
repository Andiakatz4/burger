// * Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;
