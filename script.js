document.addEventListener("DOMContentLoaded", function () {
  window.toggleMenu = function () {
    document.getElementById("navLinks").classList.toggle("show");
  };
});
function toggleService(element) {
  element.classList.toggle("active");
}
