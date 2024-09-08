const express = require("express");
const route = express.Router();
const messageControllers = require("../controllers/message");
const bodyParser = require("body-parser");

route.use(bodyParser.urlencoded({ extended: false }));

route.get("/", messageControllers.messagePage);
route.get("/create", messageControllers.createMessagePage);
route.post("/create", messageControllers.createMessageData);
route.post("/delete", messageControllers.messageDelete);
route.get("/edit/:id", messageControllers.getEditMessage);
route.post("/edit", messageControllers.postEditMessage);
route.get("/:id", messageControllers.getDetailMessage);

module.exports = route;
