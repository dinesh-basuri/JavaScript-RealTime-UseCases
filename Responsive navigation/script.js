'use strict';
// mobile view menu
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');

function openClose() {
  mobileMenu.classList.toggle('hidden');
}
openMenu.addEventListener('click',openClose);

closeMenu.addEventListener('click',openClose);

// menu fade animation
const nav = document.querySelector('.nav');

nav.addEventListener('mouseover',function(e){
  if(e.target.classList.contains('nav-link')){
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo img');

    sibling.forEach((el)=> {
      if(el !== link) {
        el.style.opacity = 0.5;
      }
    })
    logo.style.opacity = 0.5;
  }
})

nav.addEventListener('mouseout',function(e){
  if(e.target.classList.contains('nav-link')){
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo img');

    sibling.forEach((el)=> {
      if(el !== link) {
        el.style.opacity = 1;
      }
    })
    logo.style.opacity = 1;
  }
})