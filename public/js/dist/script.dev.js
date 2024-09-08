"use strict";

var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmEmail = document.querySelector("#confirmEmail");
var confirmPassword = document.querySelector("#confirmPassword");

function submitSuccess() {
  if (email.value && password.value && confirmEmail.value && confirmPassword.value && email.value === confirmEmail.value && password.value === confirmPassword.value) {
    alert("Create Account Success");
  } else {
    alert("Create Account Failed");
  }
}

var dropdownButton = document.getElementById("dropdownButton");
var dropdownMenu = document.getElementById("dropdownMenu");
dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden");
});
document.body.addEventListener("click", function (event) {
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add("hidden");
  }
});
var check = document.querySelectorAll(".classCheck");
check.forEach(function (checkbutton) {
  checkbutton.addEventListener("click", function () {
    check.forEach(function (cb) {
      if (cb !== checkbutton) cb.checked = false;
    });
    t;
  });
});