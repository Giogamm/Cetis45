document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("overlay");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
});
