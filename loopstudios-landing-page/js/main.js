const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector(".hero nav");

hamburger.addEventListener("click", () => {
   nav.classList.add("nav--visible");
});

close.addEventListener("click", () => {
   nav.classList.remove("nav--visible");
});
