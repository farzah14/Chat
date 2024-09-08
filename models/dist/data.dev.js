"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require("fs");

var path = require("path");

var pathData = path.join();

module.exports = function AccountUser(email, password) {
  _classCallCheck(this, AccountUser);

  this.email = email;
  this.password = password;
};