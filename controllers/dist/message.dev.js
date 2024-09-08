"use strict";

var messageModels = require("../models/message");

exports.messagePage = function (req, res) {
  res.render("message", {
    title: "Message",
    create: false
  });
};

exports.createMessagePage = function (req, res) {
  res.render("message", {
    title: "Message",
    create: true
  });
};

exports.createMessageData = function (req, res) {
  var _req$body = req.body,
      nameUser = _req$body.nameUser,
      message = _req$body.message,
      gender = _req$body.gender,
      country = _req$body.country;
  var messageUser = new messageModels(nameUser, message, gender, country);
  messageUser.saveMesage();
  res.redirect("/message/create");
};