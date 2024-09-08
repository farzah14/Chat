const fs = require("fs");
const path = require("path");
const util = require("../util/mainPath");
const pathData = path.join(util, "data", "message.json");

module.exports = class Message {
	constructor(name, message, gender, country, id) {
		this.name = name;
		this.message = message;
		this.gender = gender;
		this.country = country;
		this.id = id;
	}

	saveMessage() {
		fs.readFile(pathData, (err, currentMessage) => {
			let messages = [];

			if (err) {
				if (!fs.existsSync(pathData)) {
					messages;
				} else {
					console.log(`File Error : ${err}`);
				}
			}

			const existingMessageIndex = messages.findIndex(
				(msg) => msg.id === this.id
			);
			if (existingMessageIndex >= 0) {
				// Jika message ditemukan, update
				messages = JSON.parse(currentMessage);
				messages[existingMessageIndex] = {
					name: this.name,
					message: this.message,
					gender: this.gender,
					country: this.country,
					id: this.id,
				};
			}
			messages.push({
				name: this.name,
				message: this.message,
				gender: this.gender,
				country: this.country,
				id: Math.random().toFixed(2).toString(),
			});
			fs.writeFile(pathData, JSON.stringify(messages), (err) => {
				if (err) {
					console.log("Can't write message:", writeErr);
				}
			});
		});
	}
};
