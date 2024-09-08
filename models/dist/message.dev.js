"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require("fs");

var path = require("path");

var util = require("../util/mainPath");

var pathData = path.join(util, "data", "message.json");

module.exports =
/*#__PURE__*/
function () {
  function Message(name, message, gender, country) {
    _classCallCheck(this, Message);

    this.name = name;
    this.message = message;
    this.gender = gender;
    this.country = country;
  }

  _createClass(Message, [{
    key: "saveMesage",
    value: function saveMesage() {
      var _this = this;

      fs.readFile(pathData, function (err, currentMessage) {
        if (err) {
          return fs.writeFile(pathData, JSON.stringify([{
            name: _this.name,
            message: _this.message,
            gender: _this.gender,
            country: _this.country
          }]), function (errWrite) {
            if (errWrite) {
              console.log("Can't write first message");
            }
          });
        }

        var convertToObject = JSON.parse(currentMessage);
        convertToObject.push([{
          name: _this.name,
          message: _this.message,
          gender: _this.gender,
          country: _this.country
        }]);
        var convertToJson = JSON.stringify(currentMessage);
        fs.writeFile(pathData, convertToJson, function (err) {
          if (err) {
            console.log("Can't write message");
          }
        });
      });
    }
  }]);

  return Message;
}();