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

//Tabbed content
const tabsContainer = document.querySelector('.tabs');
const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');

tabsContainer.addEventListener('click',function(e){
  const click = e.target.closest('.tab');

  if(!click) return;

  tabs.forEach(t => t.classList.remove('scrollUp'));
  tabContent.forEach(el => el.classList.remove('active'));

  click.classList.add('scrollUp');
  document.querySelector(`.content-${click.dataset.tab}`).classList.add('active');
})