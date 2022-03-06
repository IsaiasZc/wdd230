const requestURL = "./data/data.json";
const cards = document.querySelector(".directory-cards");

fetch(requestURL)
.then((response) =>{
    return response.json();
})
.then((jsonObject) => {
    // console.log(jsonObject);
    const business = jsonObject;
    business.forEach(displayBusinnes);
}).then(changeView)

// distribute the view by its size whn it changes
window.onresize = () => {
    // const sectionViews = document.querySelectorAll('.views');
    changeView()
}


function displayBusinnes(business) {
    // create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let pAddress1 = document.createElement('p');
    let pNumber = document.createElement('p');
    let pWeb = document.createElement('p');
    let a = document.createElement('a');

    // set the h2 textContent
    h2.textContent = business.businessName;
    // console.log(h2)
    
    // build the image
    portrait.setAttribute('src',business.logo);
    portrait.setAttribute('alt', `logo of ${business.businessName}`);
    portrait.setAttribute('loading','lazy');

    // change the  p texts
    pAddress1.textContent = business.address;
    pNumber.textContent = business.phone;
    // pWeb.textContent = business.website;
    a.setAttribute('href',business.website);
    a.setAttribute('target', "_blank");
    a.textContent = business.website;
    
    // append the elements to the card 
    pWeb.append(a);
    
    card.classList.add("views");
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(pAddress1);
    card.appendChild(pNumber);
    card.appendChild(pWeb);
    
    // add the card to the HTML
    cards.appendChild(card);
}

// this function will help us to change the view when needed
function changeView() {
    const sectionViews = document.querySelectorAll('.views');
    if(window.innerWidth >= 640 && window.innerWidth < 1024) {
        sectionViews.forEach( element => {
            listView(element)
        })
    } else {
        sectionViews.forEach( element => {
            gridView(element)
        })
    }
}

function listView(element) {
    listViewButton.classList.add("active");
    gridViewButton.classList.remove("active");
    cards.classList.remove("directory-grid-container");
    cards.classList.add("directory-list-container");
    element.classList.add("list-display");
    element.classList.remove("grid-display");
}

function gridView(element) {
    gridViewButton.classList.add("active");
    listViewButton.classList.remove("active");
    cards.classList.add("directory-grid-container");
    cards.classList.remove("directory-list-container");
    element.classList.remove("list-display");
    element.classList.add("grid-display");
}

// enable the grid and list views

const gridViewButton = document.getElementById('grid-view');
const listViewButton = document.getElementById('list-view');

gridViewButton.addEventListener('click',() => {
    const sections = document.querySelectorAll(".views");
    sections.forEach(element => {
        gridView(element)
    })
    
});

listViewButton.addEventListener('click',() => {
    const sections = document.querySelectorAll(".views");
    sections.forEach(element => {
        listView(element)
    })
});