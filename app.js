const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE}` });
const port = process.env.PORT || 8080;
const path = require("path");
const message = require("./routes/message");

app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// middleware main page
app.get("/", (req, res) => {
	res.render("main", {
		title: "Main Page",
		isLogout: false,
	});
});

app.use("/message", message);

// not found middleware
app.use((req, res) => {
	res.send("not found url");
});

app.listen(port, () => {
	console.log(port);
});
