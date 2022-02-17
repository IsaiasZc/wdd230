// button responsive 
const button = document.querySelector('#hambButton');
const firstNav = document.querySelector('.firstNav');

button.onclick = () => {
    firstNav.classList.toggle('open');
    button.classList.toggle('open');
}

// current year

const date = new Date();

let currentYear = date.getFullYear();
let homeYear = document.querySelector('#home-year');

homeYear.innerHTML = currentYear;

// last modification

let lastModification = document.lastModified;

let lastTime = document.getElementById('lastTime');
lastTime.innerHTML = lastModification;

// current date with format: Wednesday, 24 July 2020.

const datefield = document.getElementById('currentTime')

const fulldate = new Intl.DateTimeFormat('en-Us',{
    dateStyle: "full"
}).format(date);

datefield.innerHTML = fulldate;

// remove responsive when the view is large

window.onresize = () => {
    if(window.innerWidth > 1000){
    firstNav.classList.remove('open');
    button.classList.remove('open')
    }
}

// Banner for Mondays and Tuesdays

let currentDay = date.getDay();
console.log(currentDay)

if(currentDay === 1 || currentDay === 2){
    let banner = document.querySelector("#banner");
    banner.classList.add("active-banner");

    let closeBanner = document.querySelector(".close-banner");
    closeBanner.addEventListener("click", () => {
        banner.remove()
    })
}