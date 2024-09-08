const messageModels = require("../models/message");
const data = require("../data/message.json");
const fs = require("fs");
const path = require("path");
const util = require("../util/mainPath");
const pathData = path.join(util, "data", "message.json");

exports.messagePage = (req, res) => {
	res.render("message", {
		title: "Message",
		create: false,
		messages: data,
	});
};

exports.createMessagePage = (req, res) => {
	res.render("message", {
		title: "Message",
		create: true,
		editing: false,
		messageUser: "",
	});
};

exports.createMessageData = (req, res) => {
	const { nameUser, message, gender, country } = req.body;
	if (nameUser !== "" && message !== "" && country !== "") {
		const messageUser = new messageModels(
			nameUser,
			message,
			gender,
			country,
			null
		);
		messageUser.saveMessage();
	}
	res.redirect("/message/create");
};
exports.messageDelete = (req, res) => {
	const getId = req.body.id;
	const updatedMessages = data.filter((message) => message.id !== getId);

	fs.writeFile(pathData, JSON.stringify(updatedMessages), (err) => {
		if (err) {
			console.log(false);
		}
	});
	res.redirect("/message");
};

exports.getEditMessage = (req, res) => {
	const getId = req.params.id;
	const result = data.find((dataMessage) => dataMessage.id === getId);
	res.render("message", {
		title: "Message",
		create: true,
		isLogout: false,
		editing: true,
		messageUser: result,
	});
};
exports.postEditMessage = (req, res) => {
  const getId = req.params.id;
  const { nameUser, message, gender, country } = req.body;
  if (nameUser && message && country) {
    const messageUser = new messageModels(
      nameUser,
      message,
      gender,
      country,
      getId
    );
    messageUser.saveMessage();
  }
  res.redirect("/message/create");
};
exports.getDetailMessage = (req, res) => {
	const getId = req.params.id;
	const result = data.find((dataMessage) => dataMessage.id === getId);
	res.render("detailMessage", {
		title: "Message Details",
		message: result,
	});
};
