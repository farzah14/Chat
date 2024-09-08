"use strict";

document.addEventListener("DOMContentLoaded", function () {
	const passwordFields = document.querySelectorAll("input[type='password']");
	const showPasswordIcons = document.querySelectorAll("#visible");

	passwordFields.forEach((passwordField, index) => {
		showPasswordIcons[index].addEventListener("click", function () {
			if (passwordField.type !== "password") {
				passwordField.type = "password";
				this.src = "../img/hidden.png";
			} else {
				passwordField.type = "text";
				this.src = "../img/visible.png";
			}
		});
	});
});

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmEmail = document.querySelector("#confirmEmail");
const confirmPassword = document.querySelector("#confirmPassword");

function submitSuccess() {
	if (
		email.value &&
		password.value &&
		confirmEmail.value &&
		confirmPassword.value &&
		email.value === confirmEmail.value &&
		password.value === confirmPassword.value
	) {
		alert("Create Account Success");
	} else {
		alert("Create Account Failed");
	}
}

const dropdownButton = document.querySelectorAll("#dropdownButton");
const dropdownMenu = document.querySelector("#dropdownMenu");
const dropdownMenu2 = document.querySelector("#dropdownMenu2");

dropdownButton.forEach((button, index) => {
	button.addEventListener("click", () => {
		if (index === 0) {
			dropdownMenu.classList.toggle("hidden");
			dropdownMenu2.classList.add("hidden");
		} else {
			dropdownMenu2.classList.toggle("hidden");
			dropdownMenu.classList.add("hidden");
		}
	});
});

document.body.addEventListener("click", function (event) {
	if (
		!dropdownButton.contains(event.target) &&
		!dropdownMenu.contains(event.target)
	) {
		dropdownMenu.classList.add("hidden");
	}
});

const check = document.querySelectorAll(".classCheck");

check.forEach((checkbutton) => {
	checkbutton.addEventListener("click", () => {
		check.forEach((cb) => {
			if (cb !== checkbutton) cb.checked = false;
		});
	});
});

const name1 = document.querySelector("#name");
const message = document.querySelector("#message");
const gender = document.querySelector("#gender");
const country = document.querySelector("#country");
function submitMessage() {
	if (!name1.value || !message.value || !country.value) {
		alert("Data tidak di isi");
	} else {
		alert(`Pesan terkirim ke : ${name1.value}`);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const urlParams = new URLSearchParams(window.location.search);
	const message = urlParams.get("message");
	if (message) {
		alert(message);
	}
});
