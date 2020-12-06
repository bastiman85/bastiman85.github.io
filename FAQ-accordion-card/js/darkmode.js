const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
   if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
   } else {
      document.documentElement.setAttribute("data-theme", "light");
   }
}

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e) {
   if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark"); //Ta bort detta om webbläsaren alltid ska bestämma
   } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light"); //Ta bort detta om webbläsaren alltid ska bestämma
   }
}

const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

if (currentTheme) {
   document.documentElement.setAttribute("data-theme", currentTheme);

   if (currentTheme === "dark") {
      toggleSwitch.checked = true;
   }
}

// Cred: Ananya Neogi https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

// /* Används om man inte vill spara läget till nästa besök */
// const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// if (darkModeMediaQuery.matches === true) {
//    document.documentElement.setAttribute("data-theme", "dark");
//    toggleSwitch.checked = true;
// }

// Cred: Thomas Steiner https://web.dev/prefers-color-scheme/#dark-mode-but-add-an-opt-out
