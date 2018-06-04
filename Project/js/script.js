'use strict';

// Call init function on window onload.
  window.onload = function() {
    init();
  };

 function init(){
  //Show/hide navbar on click of menu-icon
  menubtn.addEventListener('click', toggleMenu);
 }


function toggleMenu() {
    
  var navbar = document.getElementById("myTopnav");
  var menubtn = document.getElementById("menubtn");

    if (navbar.className === "show") {
        navbar.className = "close";
        menubtn.className = "menu-icon";
    } else {
        navbar.className = "show";
        menubtn.className = "close-icon";
    }
}

