sidenav = document.getElementById("sidenav");
openSidenav = document.getElementById("open-sidenav");
var open = false;

openSidenav.onclick = (function openNav() {
    if (open === false) {
        sidenav.style.width = "300px";
        open = true;
        return;
    }

    else if (open === true) {
        sidenav.style.width = "0";
        open = false;
    }
});