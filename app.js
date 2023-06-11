var logo = document.querySelector('.container');
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.hamburger');

logo.addEventListener('click', ()=>{
    menu.classList.toggle('show');
});

logo.addEventListener('click',()=>{
    menuBtn.classList.toggle('hamburger-active');
});