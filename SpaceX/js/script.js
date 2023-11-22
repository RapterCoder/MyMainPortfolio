const btn = document.querySelector('#menu-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('#mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStart = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll',scrollPage)

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  // document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage () {
  const scrollPos = window.scrollY;

  if(scrollPos > 100 && !scrollStart) {
    countUp();
    scrollStart = true;
  } else if (scrollPos < 100 && scrollStart) {
    reset();
    scrollStart = false;
  }
}

window.addEventListener('scroll',scrollFun);

function scrollFun() {
  menu.classList.remove('show-menu', window.scrollY > 100);
  btn.classList.remove('open', window.scrollY > 100);
  overlay.classList.remove('overlay-show', window.scrollY > 100);
}

function countUp () { 
  counters.forEach((counter) => {
    counter.innerText = '0';
    console.log('counter')
    console.log(counter)

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      console.log('target qiymati')
      console.log(target)

      const c = +counter.innerText;
      console.log('Bu c ni qiymati')
      console.log(c)
      
      const increment = target / 100;
      console.log('incremet')
      console.log(increment)

      if (c < target) {
        counter.innerText =  `${Math.ceil(c + increment)}`;
        console.log( `${Math.ceil(c + increment)}`)

        setTimeout(updateCounter,25)
      } else {
        counter.innerText = target
      }
    }
    updateCounter()
  })
}

function reset () {
  counters.forEach((counter) => counter.innerHTML = '0')
}