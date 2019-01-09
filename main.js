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


var filterForm = document.querySelector('body section nav form');
var leesduurKort = document.querySelector('body section nav form input:nth-of-type(1)');
var leesduurlang = document.querySelector('body section nav form input:nth-of-type(2)');

function filterKort() {
    filterForm.action = '/HTML/Drama/leesduur-kort.html';
    filterForm.submit();
}

leesduurKort.addEventListener('click', filterKort);



function filterLang() {
    filterForm.action = '/HTML/Drama/leesduur-lang.html';
    filterForm.submit();
}
leesduurlang.addEventListener('click', filterLang);
