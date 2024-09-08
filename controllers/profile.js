let dataUser;
try {
	dataUser = require("../data/account.json");
} catch {
	dataUser = [];
}

exports.showProfile = (req, res) => {
	res.render("profile", {
		title: "Profile",
		data: dataUser,
	});
};
