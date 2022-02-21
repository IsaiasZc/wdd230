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

if(currentDay === 1 || currentDay === 2){
    let banner = document.querySelector("#banner");
    banner.classList.add("active-banner");

    let closeBanner = document.querySelector(".close-banner");
    closeBanner.addEventListener("click", () => {
        banner.remove()
    })
}

// discover page
window.addEventListener("load", () => {
    let imagesLoad = document.getElementsByClassName("img-load");
    for(var i=0; i < imagesLoad.length; i++) {
        let image = imagesLoad[i];
        image.classList.add("galery-visible");
    }
})

window.addEventListener("scroll", () => {
    let elements = document.getElementsByClassName("galery-discover");
    let screenResize = window.innerHeight;

    for(var i=0; i < elements.length; i++){
        let element = elements[i];

        if (element.getBoundingClientRect().top < screenResize) {
            element.classList.add("galery-visible");
        } else {
            element.classList.remove("galery-visible");
        }
    }

})

// Number of visits in local storage

const visitsDisplay = document.getElementById("visits-display");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `first`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// closing this visits banner
const visitsBanner = document.querySelector("#visit-container");
const closeVisitsBanner = document.querySelector(".close-visits-banner");
closeVisitsBanner.addEventListener("click", () => {
        visitsBanner.remove()})