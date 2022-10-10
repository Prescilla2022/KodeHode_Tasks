let x = document.getElementById("loginform");
let y = document.getElementById("registerform");
let z = document.getElementById("switch");
let userName = document.getElementById("user-name");
let userPassword = document.getElementById("user-password");

function check() {
  if (z.checked) {
    register();
  } else {
    login();
  }
}

function register() {
  /*x.style.display = "none";
  y.style.display = "block";*/
  x.style.left = "-999px";
  x.style.transition = "1s";
  y.style.left = "0px";
  y.style.transition = "1s";
}

function login() {
  /* x.style.display = "block";
  y.style.display = "none";*/
  y.style.left = "999px";
  y.style.transition = "1s";
  x.style.left = "0px";
  x.style.transition = "1s";
}

function userAuthentication() {
  if (userName.value === "username" && userPassword.value === "password") {
    alert("Login Successful");
  } else {
    alert("Login Failed");
  }
}
