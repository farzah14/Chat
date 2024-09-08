"use strict";

var express = require("express");

var route = express.Router();

var loginSignupControllers = require("../controllers/loginSignUp");

var bodyParser = require("body-parser");

route.use(bodyParser.urlencoded({
  extended: false
}));
route.get("/signup", loginSignupControllers.signUpPage);
route.post("/signup", loginSignupControllers.postSignUp);
route.get("/login", loginSignupControllers.loginPage);
route.post("/login", loginSignupControllers.postLogin);
module.exports = route;