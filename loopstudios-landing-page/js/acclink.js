function addNoOpener(link) {
   let linkTypes = (link.getAttribute("rel") || "").split(" ");
   if (!linkTypes.includes("noopener")) {
      linkTypes.push("noopener");
   }
   link.setAttribute("rel", linkTypes.join(" ").trim());
}

function addNewTabMessage(link) {
   if (!link.querySelector(".screen-reader-only")) {
      link.insertAdjacentHTML("beforeend", '<span class="screen-reader-only">(opens in a new tab)</span>');
   }
}

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
   addNoOpener(link);
   addNewTabMessage(link);
});

//Cred: Will Boyd https://codersblock.com/blog/external-links-new-tabs-and-accessibility/
