// const menu = document.querySelector('.nav__menu');
// const menulist = document.querySelector('.nav__list');
// const links = document.querySelector('.nav__link');

const menu = document.getElementById('.nav__menu');
const menulist = document.getElementById('.nav__list');
const links = document.getElementById('.nav__link');

menu.addEventListener('click', function(){

    menulist.classList.toggle('nav__list--show')
});

links.forEach(function(link){

    link.addEventListener('click', function(){

        menulist.classList.remove('nav__list--show')
    })
})