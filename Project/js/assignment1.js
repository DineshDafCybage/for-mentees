'use strict';
window.onload = initialize;

function initialize() {
  document.getElementById("hamburger-btn").addEventListener('click', fnToggleMenu);
}

/* Code to handle Hamburger */
function fnToggleMenu() {
var ele = document.getElementById("hamburger-btn");
var eleNav = document.getElementById('nav-bar');
 if (ele.classList.contains('show-menu')) {
      ele.classList.remove('show-menu');
      ele.classList.add('hide-menu');
      document.getElementById('menuBtn').setAttribute("src","images/close-icon.png");

      /* Code for showing Menu Items on click of Hamburger */
      if(eleNav.classList.contains('hide-nav')) { 
        eleNav.classList.add('show-nav');
        eleNav.classList.remove('hide-nav');
       }
    }
    else {  
      document.getElementById('menuBtn').setAttribute("src","images/menu-icon.png");
      ele.classList.remove('hide-menu');
      ele.classList.add('show-menu');
      
      /* Condition for hiding Menu Items on click of Hamburger */
       if (eleNav.classList.contains('show-nav')) {
        eleNav.classList.remove('show-nav');
        eleNav.classList.add('hide-nav');
       }
    }
}