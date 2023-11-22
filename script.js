var typed = new Typed('.multiple-text',{
  strings: ['Frontent Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

let menuLi = document.querySelectorAll('header nav a')
let section = document.querySelectorAll('section')

console.log(section.length)
function activeMenu () {
  let len = section.length
  while(--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach(sec => sec.classList.remove('active'))
  menuLi[len].classList.add('active')
}

activeMenu()
window.addEventListener('scroll',activeMenu)

const header = document.querySelector('header')
window.addEventListener('scroll',function() {
  header.classList.toggle('sticky', window.scrollY>50)
})

const btn = document.querySelector('#menu-btn')
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('#mobile-menu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  // document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}