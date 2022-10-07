var button = document.querySelector('.menu_button');
var menuNav = document.querySelector('.menu_list');
var closeButton = document.querySelector('.close_button');

function openNav() {
    menuNav.classList.add('open');
}

function closeNav() {
    menuNav.classList.remove('open');
}

button.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);