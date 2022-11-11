import i18Obj from "./translate.js";

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

// const winterBtn = document.querySelector('.btn-Winter');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtn = document.querySelector('.portfolio-btns');
const portfolioBtnArray = document.querySelectorAll('.portfolio-btn');

function changeImages(event) {
    if (event.target.classList.contains('portfolio-btn')) {
        portfolioImages.forEach((image, index) => {
            image.src = `assets/images/${event.target.dataset.season}/${index + 1}.jpg`
        });
        event.target.classList.remove('btn-dark');
    }
}


portfolioBtnArray.forEach((button) => {
    button.addEventListener('click', () => {
        portfolioBtnArray.forEach((btn) => btn.classList.add('btn-dark'));
        button.classList.remove('btn-dark');
    })
})

portfolioBtn.addEventListener('click', changeImages);


const themeBtn = document.querySelector('.theme-button');

function changeTheme() {
    const sections = document.querySelectorAll('.skills, .portfolio, .video, .price');
    const sectionTitle = document.querySelectorAll('.section-title');
    const sectionHeader = document.querySelectorAll('.section-header');

    sections.forEach((section) => section.classList.toggle('light-theme'));
    sectionTitle.forEach((title) => title.classList.toggle('light-theme'));
    sectionHeader.forEach((header) => header.classList.toggle('light-theme'));
}

themeBtn.addEventListener('click', changeTheme);


function getTranslate(lang) {
    const dataAtributes = document.querySelectorAll('[data-i18n]')
    let langObj = i18Obj[lang];

    dataAtributes.forEach((data) => {
        let key = data.dataset.i18n;

        for (let i in langObj) {
            if (i == key) {
                data.textContent = langObj[key];
            }
        }
    })
}


function getLanguage(event) {
    if (event.target.classList.contains('language')) {
        getTranslate(event.target.textContent);
    }
}

langParent.addEventListener('click', getLanguage);

function closeModal() {
    modal.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);
