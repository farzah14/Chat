"use strict";

var express = require("express");

var route = express.Router();

var messageControllers = require("../controllers/message");

var bodyParser = require("body-parser");

route.use(bodyParser.urlencoded({
  extended: false
}));
route.get("/", messageControllers.messagePage);
route.get("/create", messageControllers.createMessagePage);
route.post("/create", messageControllers.createMessageData);
module.exports = route;