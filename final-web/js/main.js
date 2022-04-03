// navigation button responsive 
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

// activity cards menu
// Here we are going show the card chosed by the user

// This parametes is for the activities cards
const activityCards = document.querySelector('#activities-slider');
const activityActive = document.querySelector('#activity-active');
const activityNext = document.getElementById('activity-next');
const activityBefore = document.getElementById('activity-before');

// This const are for the temples cards
const templesCards = document.getElementById('temples-slider');
const templesActive = document.getElementById('slider-temple-active');
const templesNext = document.getElementById('slider-temple-next');
const templesBefore = document.getElementById('slider-temple-before');

// buttons
activityNext.addEventListener("click", () => changeCard(activityCards,activityActive,1));
activityBefore.addEventListener("click", () => changeCard(activityCards,activityActive,-1))

templesNext.addEventListener("click", () => changeCard(templesCards,templesActive,1));
activityBefore.addEventListener("click", () => changeCard(templesCards,templesActive,-1))

function changeCard(cardsList,activeNumber,move) {
    // Change between cards based on the button clicked
    // activityCards[activityCounter].classList.remove('activity-active');
    let counter = parseInt(activeNumber.textContent);
    cardsList.classList.remove(`slider-active-${counter}`);
    counter += move;
    if(counter == 4 ) {
        counter = 1;
    } else if(counter == 0) {
        counter = 3;
    };
    // activityCards[activityCounter].classList.add('activity-active');
    cardsList.classList.add(`slider-active-${counter}`);
    activeNumber.textContent = `${counter}`;
}