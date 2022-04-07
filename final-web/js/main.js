// last modification 
const date = new Date();
let lastModification = document.lastModified;

let lastTime = document.getElementById('lastTime');
lastTime.innerHTML = lastModification;

// current date with format: Wednesday, 24 July 2020.

const datefield = document.getElementById('currentTime')

const fulldate = new Intl.DateTimeFormat('en-Us',{
    dateStyle: "full"
}).format(date);

lastTime.innerHTML = fulldate;


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

if(templesCards != null || activityCards != null){
    activityNext.addEventListener("click", () => changeCard(activityCards,activityActive,1));
    activityBefore.addEventListener("click", () => changeCard(activityCards,activityActive,-1))

    templesNext.addEventListener("click", () => changeCard(templesCards,templesActive,1));
    templesBefore.addEventListener("click", () => changeCard(templesCards,templesActive,-1))
}

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

// reservation rooms counter counter

const roomsCounter = document.getElementById('rooms-counter');

const buttonAdd = document.querySelector('.rooms-counter-add');
const buttonSubt = document.querySelector('.rooms-counter-subt');

if(roomsCounter != null) {
    roomsCounter.value = 1;
    buttonAdd.addEventListener('click',() => {
        if(parseInt(roomsCounter.value) < 9) {
            roomsCounter.value++ // = parseInt(roomsCounter.value) + 1;
            // console.log(roomsCounter.value);
        }
    })

    buttonSubt.addEventListener('click',() => {
        if(parseInt(roomsCounter.value) > 1) {
            roomsCounter.value-- // = parseInt(roomsCounter.value) + 1;
            // console.log(roomsCounter.value);
        }
    })
}

// reservation buttons for the galery
const reserveCards = document.getElementById('reservation-slider');
const reserveActive = document.getElementById('reservation-galery-active');
const reserveNext = document.getElementById('reservation-galery-next');
const reserveBefore = document.getElementById('reservation-galery-before');

if(reserveCards != null){
    reserveNext.addEventListener("click", () => changeCard(reserveCards,reserveActive,1));
    reserveBefore.addEventListener("click", () => changeCard(reserveCards,reserveActive,-1))
}

//function to valide the reservation form

function validateForm() {
    document.querySelector(".invalid-name").innerHTML = "write your full name*";
    document.querySelector(".invalid-email").innerHTML = "write a valid email*";
    document.querySelector(".invalid-phone").innerHTML = "write a valid phone*";
    document.querySelector(".invalid-date").innerHTML = "Pick an start and end dates";
    document.querySelector(".invalid-location").innerHTML = "Choose a location*";
    document.querySelector(".invalid-room").innerHTML = "Choose a room*";
//     if(document.form.fname.value.length==0) {
//         console.log(document.querySelector(".testing"))
//         document.querySelector(".testing").innerHTML = "Write your full name";
//         // alert("Tiene que escribir su nombre");
//         // document.form.fname.focus();
//     }
//     alert("Aqui");
}