var zoekKnop = document.querySelector('section nav form i');
var zoekForm = document.querySelector('section nav form input');
var containerForm =document.querySelector('section nav form');


function zoekklapt() {
    zoekForm.classList.toggle('active');
 containerForm.classList.toggle('active');
    zoekKnop.classList.toggle('checked')
    
}

zoekKnop.addEventListener('click', zoekklapt);