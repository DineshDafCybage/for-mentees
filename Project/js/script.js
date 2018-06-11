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
  var err = document.getElementById("error-msg");
  var email = document.forms["form"]["email"].value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  event.preventDefault();
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
    err.classList.remove('hide-msg');
    err.classList.add('show-msg');
    return false;
  }
  else {
    if(err.classList.contains('show-msg')) {
    err.classList.add('hide-msg');
    err.classList.remove('show-msg');
    }
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
