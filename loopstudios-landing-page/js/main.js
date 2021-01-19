const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector(".hero nav");

hamburger.addEventListener("click", () => {
   nav.classList.add("nav--visible");
   nav.classList.remove("nav--hidden");
   nav.classList.remove("nav");
});

close.addEventListener("click", () => {
   nav.classList.remove("nav--visible");

   nav.classList.add("nav--hidden");
   setTimeout(function () {
      nav.classList.add("nav");
   }, 250);
});

const button = document.querySelector(".btn");
const creations = document.querySelectorAll(".creation.hide");
button.addEventListener("click", () => {
   for (i = 0; i < creations.length; i++) {
      creations[i].classList.remove("hide");
   }
   button.classList.add("hide");
});
