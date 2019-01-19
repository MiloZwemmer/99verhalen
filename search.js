var zoekKnop = document.querySelector('header nav form i');
var zoekForm = document.querySelector('header nav form input');
var containerForm =document.querySelector('header nav form');
var RETlogo = document.querySelector('header img')

function zoekklapt() {
    zoekForm.classList.toggle('active');
 containerForm.classList.toggle('active');
    RETlogo.classList.toggle('move')
    zoekKnop.classList.toggle('checked')
    
}

zoekKnop.addEventListener('click', zoekklapt);