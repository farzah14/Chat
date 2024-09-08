"use strict";

var accountUser = require("../models/accountUser");

var data = require("../data/account.json");

exports.signUpPage = function (req, res) {
  res.render("signUp", {
    title: "Sign Up Page",
    text: "Login",
    titleForm: "Sign Up"
  });
};

exports.postSignUp = function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  var _req$body2 = req.body,
      confirmEmail = _req$body2.confirmEmail,
      confirmPassword = _req$body2.confirmPassword;

  if (email === confirmEmail && password === confirmPassword) {
    var getData = new accountUser(email, password);
    getData.saveAccount();
    res.redirect("/join/signup");
  } else {
    var _getData = new accountUser("", "");

    _getData.saveAccount();

    res.redirect("/join/signup");
  }
};

exports.loginPage = function (req, res) {
  res.render("login", {
    title: "Login Page",
    text: "Sign Up",
    titleForm: "Login"
  });
};

exports.postLogin = function (req, res) {
  var _req$body3 = req.body,
      email = _req$body3.email,
      password = _req$body3.password;
  var userData = data.find(function (user) {
    return email === user.email && password === user.password;
  });
  userData ? console.log("Login Success") : console.log("Login Failed");
  res.redirect("/join/login");
};