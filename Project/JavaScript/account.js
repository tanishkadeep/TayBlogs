var box = document.querySelector(".box");
var box1 = document.querySelector(".box1");
var sign = document.querySelector(".sign");
var login1 = document.querySelector(".login1");

// On clicking the sign in option, the sign in box will appear and log in box will disapear.
sign.addEventListener("click", () => {
  box1.style.display = "block";
  login1.style.display = "block";
  box.style.display = "none";
  sign.style.display = "none";
});

// On clicking the log in option, the log in box will appear and sign in box will disapear.
login1.addEventListener("click", () => {
  box1.style.display = "none";
  login1.style.display = "none";
  box.style.display = "block";
  sign.style.display = "block";
});
