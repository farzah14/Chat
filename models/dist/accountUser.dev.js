"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require("fs");

var path = require("path");

var util = require("../util/mainPath");

var pathData = path.join(util, "data", "account.json");

module.exports =
/*#__PURE__*/
function () {
  function AccountUser(email, password) {
    _classCallCheck(this, AccountUser);

    this.email = email;
    this.password = password;
  }

  _createClass(AccountUser, [{
    key: "saveAccount",
    value: function saveAccount() {
      var _this = this;

      fs.readFile(pathData, function (error, currentData) {
        if (error) {
          return fs.writeFile(pathData, JSON.stringify([{
            email: _this.email,
            password: _this.password
          }]), function (err) {
            if (err) {
              console.log("Tidak dapat menulis data pertama");
            }
          });
        }

        var convertToObject = JSON.parse(currentData);
        convertToObject.push({
          email: _this.email,
          password: _this.password
        });
        fs.writeFile(pathData, JSON.stringify(convertToObject), function (err) {
          if (err) {
            console.log("Error writing to file");
          }
        });
      });
    }
  }]);

  return AccountUser;
}();