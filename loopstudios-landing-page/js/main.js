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
