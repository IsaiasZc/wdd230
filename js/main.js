const date = new Date();

let currentYear = date.getFullYear();

let homeYear = document.querySelector('#home-year');

homeYear.innerHTML = currentYear;


let lastModification = document.lastModified;

let lastUpdated = document.getElementById('last-updated');
lastUpdated.innerHTML = lastModification;
console.log(lastModification)