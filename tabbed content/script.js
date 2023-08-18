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

// navigation scrolling
document.querySelector('.nav-links').addEventListener('click',function(e){
  e.preventDefault();

  if(e.target.classList.contains('nav-link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})

/* - old method, not efficient one
const navMenu = document.querySelectorAll('.nav-link');

navMenu.forEach((el)=>{
  el.addEventListener('click',function(e){
    e.preventDefault();

    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  })
})
*/

// login page opening
const openWindow = document.querySelector('.open-btn');
const closeWindow = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const loginPage = document.querySelector('.login-page');

function openClose() {
  loginPage.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

openWindow.addEventListener('click',openClose);
closeWindow.addEventListener('click',openClose);
overlay.addEventListener('click',openClose);

document.addEventListener('keydown',function(e){
  if(e.key === 'Escape') {
    openClose();
  }
})