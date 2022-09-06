const hamburger = document.querySelector('.menu-list');
const menu = document.querySelector('.nav')
const menuList = document.querySelector('.list')
function toggleMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open-menu');
}

hamburger.addEventListener('click', toggleMenu);

function closeMenu () {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open-menu')
}
menuList.addEventListener('click', closeMenu)


