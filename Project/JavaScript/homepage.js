var open = document.querySelector(".open");
var close = document.querySelector(".close");
var box = document.querySelector(".box");
var subs = document.querySelector(".subs");

// On clicking the subscribe button, the box will appear and subscribe button will disapear.
open.addEventListener("click", () => {
  box.style.display = "block";
  open.style.display = "none";
});

// On clicking the cross or close mark, the box will disappear and subscribe button will appear again.
close.addEventListener("click", () => {
  box.style.display = "none";
  open.style.display = "block";
});

subs.addEventListener("click", () => {
  alert("You have subscribed!");
});
