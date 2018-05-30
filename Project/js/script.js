function myFunction() {
    var x = document.getElementById("myTopnav");
    var button = document.getElementById("menu-icon");

    if (x.className === "topnav") {
        x.className += " responsive";
        button.innerHTML = "<i class='fas fa-times'></i>";
    } else {
        x.className = "topnav";
        button.innerHTML = "<i class='fa fa-bars'></i>";
    }
}

