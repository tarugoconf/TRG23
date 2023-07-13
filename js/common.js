import "./components/video.js";
import "./components/carousel.js";

// Menu
document.body.addEventListener("click", () => {
  document.body.classList.remove("has-navbar-open");
});

document.getElementById("menu-button").addEventListener("click", (ev) => {
  document.body.classList.toggle("has-navbar-open");
  ev.stopPropagation();
});
document.getElementById("menu").addEventListener("click", (ev) => {
  ev.stopPropagation();
  setTimeout(() => {
    document.body.classList.remove("has-navbar-open");
  }, 100);
});
