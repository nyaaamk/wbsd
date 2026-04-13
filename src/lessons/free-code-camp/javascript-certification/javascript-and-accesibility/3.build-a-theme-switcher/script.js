var themes = [
  { name: "Light", message: "Light theme activated!" },
  { name: "Dark", message: "Dark theme activated!" },
  { name: "Ocean", message: "Ocean theme activated!" },
  { name: "Nord", message: "Nord theme activated!" }
];

var button = document.getElementById("theme-switcher-button");
var dropdown = document.getElementById("theme-dropdown");
var status = document.getElementById("status");

button.addEventListener("click", function (){
  if (button.getAttribute("aria-expanded") === "true") {
    dropdown.hidden = true;
    button.setAttribute("aria-expanded", "false");
  } else {
    dropdown.hidden = false;
    button.setAttribute("aria-expanded", "true");
  }
});

document.getElementById("theme-light").addEventListener("click", function (){ applyTheme("Light"); });
document.getElementById("theme-dark").addEventListener("click", function (){ applyTheme("Dark"); });
document.getElementById("theme-ocean").addEventListener("click", function (){ applyTheme("Ocean"); });
document.getElementById("theme-nord").addEventListener("click", function (){ applyTheme("Nord"); });

function applyTheme (name){
  var theme = null;
  for (var i = 0; i < themes.length; i++) {
    if (themes[i].name === name) {
      theme = themes[i];
    }
  }
  if (!theme) return;

  document.body.classList.remove("theme-light", "theme-dark", "theme-ocean", "theme-nord");
  document.body.classList.add("theme-" + theme.name);
  status.textContent = theme.message;

  dropdown.hidden = true;
  button.setAttribute("aria-expanded", "false");
}