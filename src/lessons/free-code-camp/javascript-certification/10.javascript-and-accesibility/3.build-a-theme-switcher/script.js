const themes = [
  { name: "dawn", message: "Golden hour — Dawn theme is glowing." },
  { name: "midnight", message: "Lights out — Midnight theme is active." },
  { name: "forest", message: "Into the woods — Forest theme engaged." },
  { name: "ocean", message: "Dive in — Ocean theme is flowing." },
  { name: "lavender", message: "Soft and dreamy — Lavender theme is set." }
];

const btn = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const liveRegion = document.getElementById("theme-message");

let currentTheme = null;

const openMenu = () => {
  dropdown.hidden = false;
  btn.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
  dropdown.hidden = true;
  btn.setAttribute("aria-expanded", "false");
};

btn.addEventListener("click", function (){
  if (btn.getAttribute("aria-expanded") === "true") {
    closeMenu();
  } else {
    openMenu();
  }
});

document.querySelectorAll("#theme-dropdown li").forEach(function (item){
  item.addEventListener("click", function (){
    const themeName = item.id.replace("theme-", "");
    const themeData = themes.find(function (t){
      return t.name === themeName;
    });

    if (currentTheme) {
      document.body.classList.remove("theme-" + currentTheme);
      const prevActive = document.querySelector("#theme-dropdown li.active");
      if (prevActive) prevActive.classList.remove("active");
    }

    document.body.classList.add("theme-" + themeName);
    item.classList.add("active");
    liveRegion.textContent = themeData.message;
    currentTheme = themeName;

    closeMenu();
  });
});

document.addEventListener("click", function (e){
  if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
    closeMenu();
  }
});