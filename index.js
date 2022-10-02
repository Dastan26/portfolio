const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-menu__item-link');
const hireMeBtn = document.querySelector('.hero-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');


function showHideMenu() {
    burger.classList.toggle('open');
    navMenu.classList.toggle('open');
}


function hideMenuForLinks() {
    burger.classList.remove('open');
    navMenu.classList.remove('open');
}

burger.addEventListener('click', showHideMenu);

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', hideMenuForLinks);
}


function showModal() {
    modal.classList.add('open');
}

hireMeBtn.addEventListener('click', showModal);


function closeModal() {
    modal.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);
