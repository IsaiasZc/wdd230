// button responsive 
const button = document.querySelector('#hambButton');
const firstNav = document.querySelector('.nav-options');
const nav = document.querySelector('.nav');
const navBrand = document.querySelector('.nav-brand');

button.onclick = () => {
    button.classList.toggle('nav-active');
    firstNav.classList.toggle('nav-active');
    nav.classList.toggle('nav-active');
    navBrand.classList.toggle('nav-active');
}