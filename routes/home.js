const express = require("express");
const route = express.Router();
const homeControllers = require("../controllers/home");

route.get("/", homeControllers.homePage);
module.exports = route;














