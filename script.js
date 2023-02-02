const btn = document.querySelector('#hamburger');
const nav = document.querySelector('.nav nav');
const openNav = document.querySelector('.menuOn');
const closeBtn = document.querySelector('.crossIcon');
const menuLink = document.querySelectorAll('#menu-link li a');
const popup = document.querySelector('.pop-background');
const openPopBtn = document.querySelector('.orange-btn');
const closePopBtn = document.querySelector('.poptop img');
const seeProject = document.querySelectorAll('.seeProject-btn');
const closeCrossDesktop = document.querySelector('.poptop-desktop img');

const toggleMenuDisplay = () => {
  if (nav.style.display !== 'none') {
    nav.style.display = 'none';
    openNav.style.display = 'flex';
  } else {
    nav.style.display = 'grid';
    openNav.style.display = 'none';
  }
};

function openPopup() {
  popup.classList.add('openPopup');
}

function closePopup() {
  popup.classList.remove('openPopup');
}

seeProject.forEach((btn) => {
  btn.addEventListener('click', openPopup);
});
closePopBtn.addEventListener('click', closePopup);
openPopBtn.addEventListener('click', openPopup);
btn.addEventListener('click', toggleMenuDisplay);
closeBtn.addEventListener('click', toggleMenuDisplay);
menuLink.forEach((link) => {
  link.addEventListener('click', toggleMenuDisplay);
});
closeCrossDesktop.addEventListener('click', closePopup);
