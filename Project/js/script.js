'use strict';

// Call init function on window onload.
// window.onload = function() {
//   init();
//   console.log("called");
// };

// function init(){
  var navbar = document.getElementById("myTopnav");
  var menubtn = document.getElementById("menubtn");

  //Show/hide navbar on click of menu-icon
  menubtn.addEventListener('click', showMenu);
// }


function showMenu() {
    if (navbar.className === "topnav") {
        navbar.classList.add("responsive");
        menubtn.className = "close-icon";
    } else {
        navbar.classList.remove("responsive");
        menubtn.className = "menu-icon";
    }
}

