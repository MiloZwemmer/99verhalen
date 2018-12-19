/* wanneer de gebruiker op de knop drukt switchen de filters naar show */
function myFunction() {
    document.getElementById("filters").classList.toggle("show");
}

/* sluit de dropdown als de gebruiker naast het menuveld klikt */
window.onclick = function (event) {
    if (!event.target.matches('.dropdownButton')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
