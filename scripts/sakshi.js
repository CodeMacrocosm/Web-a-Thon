/**@description To rotate the paragraph on click of the button */

function rotate() {
  let el = document.getElementById("animation");
  el.classList.remove("rotate");
  void el.offsetWidth; //This makes the DOM to reflow/refresh
  el.classList.add("rotate");
}
