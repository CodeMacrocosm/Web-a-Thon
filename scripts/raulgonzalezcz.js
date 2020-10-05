/**@description To rotate the an element when button is pressed */

function rotate() {
    let el = document.getElementById("flag");
    el.classList.remove("rotate");
    void el.offsetWidth; //This makes the DOM to reflow/refresh
    el.classList.add("rotate");
  }
  
// For more flags icon, see https://www.iconfinder.com/iconsets/ensign-11