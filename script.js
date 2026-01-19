document.addEventListener("DOMContentLoaded", function () {
  alert("JS LOADED");

  window.toggleMenu = function () {
    document.getElementById("navLinks").classList.toggle("show");
  };
});
