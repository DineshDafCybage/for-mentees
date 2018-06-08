'use strict';

// Call init function on window onload.
  window.onload = function() {
    init();
  };

 function init(){
  var form = document.getElementById("form");
  var scrollbtn = document.querySelector('.scroll');

  //Show/hide navbar on click of menu-icon
  menubtn.addEventListener('click', toggleMenu);

  //check form field on sumit of form
  form.addEventListener('submit', checkInput);

  //scroll down on click of scroll down icon
  scrollbtn.addEventListener('click', scrollDown);
 }


function checkInput() {
  var email = document.forms["form"]["email"].value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
    alert("Not a valid e-mail address");
    return false;
  }
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

function scrollDown() {
  document.querySelector('#our-drones').scrollIntoView({
  behavior: 'smooth'
});
}
