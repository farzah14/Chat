"use strict";

var express = require("express");

var app = express();

var dotenv = require("dotenv");

dotenv.config({
  path: ".env.".concat(process.env.NODE)
});
var port = process.env.PORT || 8080;

var path = require("path");

var home = require("./routes/home");

var message = require("./routes/message");

var posts = require("./routes/posts");

var createAccount = require("./routes/loginSignUp");

app.use(express["static"](path.join(__dirname, "views")));
app.set("view engine", "ejs");
app.use(express["static"](path.join(__dirname, "public"))); // middleware main page

app.get("/", function (req, res) {
  res.render("main", {
    title: "Main Page"
  });
});
app.use("/join", createAccount);
app.use("/home", home);
app.use("/message", message);
app.use("/posts", posts); // not found middleware

app.use(function (req, res) {
  res.send("not found url");
});
app.listen(port, function () {
  console.log(port);
});