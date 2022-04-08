const templeContainer = document.querySelector(".temple-cards-container");
const templesURL = "./json/temple.json";
let likeStorage = {};

fetch(templesURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        jsonObject.forEach((element) => {
            // element info
            // let name = element.name;
            // let address = element.address;
            // let phone = element.phone;
            // let email = element.email;
            // let services = element.services;
            // let history = element.history;
            // let ordinance_schedule = element.ordinance_schedule;
            // let session_schedule = element.session_schedule;
            // let temple_closure_schedule = element.temple_closure_schedule;
            
            // card container
            let templeCard = document.createElement("div");
            templeCard.className = "temple-card";
            
            // container for the header image
            let templeCardHeader = document.createElement("div");
            templeCardHeader.className = "temple-card-header";
            
            // container for the body
            let templeCardBody = document.createElement("div");
            templeCardBody.className = "temple-card-body"; // body container

            //image container
            let templeCardImg = document.createElement("div");
            templeCardImg.className = "temple-card-img";
            
            // img
            let picture = document.createElement("picture");
            let img = document.createElement("img");
            img.className = "img-cover-all";
            img.setAttribute("src", element.images[0]);
            img.setAttribute("alt", `logo of ${element.name}`);
            img.setAttribute("loading", "lazy");

            let sourceMed = document.createElement("source");
            sourceMed.setAttribute("media","(min-width: 40rem) and (max-width: 63.99rem)");
            sourceMed.setAttribute("srset",element.images[1]);
            picture.append(sourceMed);

            let sourceLarge = document.createElement("source");
            sourceLarge.setAttribute("media","(min-width: 64rem)");
            sourceLarge.setAttribute("srset",element.images[2]);
            picture.append(sourceLarge);

            picture.append(img)
            templeCardImg.append(picture)
            templeCardHeader.append(templeCardImg);

            // description container
            let templeShortDescription = document.createElement("div");
            templeShortDescription.className = "temple-card-header-description";

            // description first div
            let shortDescriDiv1 = document.createElement("div");
            let templeName = document.createElement("h2");
            templeName.textContent = element.name;
            let templeHistory = document.createElement("p");
            templeHistory.innerHTML = element.history;

            // descri div 2
            let shortDescriDiv2 = document.createElement("div");
            let templeMoreInfo = document.createElement("h3");
            templeMoreInfo.textContent = "More Information";
            // arrow button
            let arrowButton = document.createElement("button");
            arrowButton.className = "temple-more-info-button";
            arrowButton.addEventListener("click",()=> {
                arrowButton.classList.toggle("info-active");
                templeCardBody.classList.toggle("info-active");

                // if(likeStorage[localName] == false) {
                //     likeStorage[localName] = true;
                // } else {
                //     likeStorage[localName] = false;
                // }
                        
            })
            let spanArrow = document.createElement("span");
            spanArrow.classList.add("temple-more-info-arrow");
            arrowButton.append(spanArrow);
            // localName
            let localName = element.name.replace(/ /g,"");
            // create the local storage
            likeStorage[localName] = window.localStorage.getItem(localName);
            likeStorage[localName] = likeStorage[localName] != null ? likeStorage[localName] : likeStorage[localName] = "false";
            localStorage.setItem(localName, likeStorage[localName]);

            //*like element
            let likeContainer = document.createElement("div"); // store it in templeShortDescription
            let likeIcon = document.createElement("span");
            if(likeStorage[localName] === "true") {
                likeIcon.classList.add("like");
            }

            // likeIcon.addEventListener("click", () =>{
            likeContainer.addEventListener("click", () =>{
                likeIcon.classList.toggle("like");

                let changeLike = window.localStorage.getItem(localName);

                changeLike = (changeLike === "false" ? changeLike = "true" : changeLike = "false");
                localStorage.setItem(localName, changeLike);
            })
            likeContainer.classList.add("temple-like");
            let likeText = document.createElement("span");
            likeText.textContent = "like";
            likeContainer.appendChild(likeIcon);
            likeContainer.appendChild(likeText);
            //store the elements in templeShortDescription
            shortDescriDiv1.append(templeName);
            shortDescriDiv1.append(templeHistory);
            shortDescriDiv2.append(templeMoreInfo);
            shortDescriDiv2.append(arrowButton);
            shortDescriDiv2.append(likeContainer);
            
            templeShortDescription.append(shortDescriDiv1);
            templeShortDescription.append(shortDescriDiv2);

            // store the templeShortDescription in the header div
            templeCardHeader.append(templeShortDescription);
            // store the header in the card
            templeCard.append(templeCardHeader);



            //body information
            let templeInformation = document.createElement("div"); //information container
            templeInformation.className = "temple-card-body-information";
            templeInformation.innerHTML = `<h2>Information</h2><p>Address: ${element.address}</p><p>Phone: ${element.phone}</p><p>Email: ${element.email}</p>`

            // body services
            let templeServices = document.createElement("div"); // services containter
            templeServices.className ="temple-card-body-services";
            let templeServicesH2 = document.createElement("h2");
            templeServicesH2.textContent = "Services";
            templeServices.append(templeServicesH2);
            let templeServicesList = document.createElement("ul");
            for(i=0; i < element.services.length; i++) {
                let li = document.createElement("li");
                li.textContent = element.services[i];
                templeServicesList.append(li);
            }
            templeServices.append(templeServicesList);

            // Body Closure
            let templeClosure = document.createElement("div"); // Closure container
            templeClosure.className = "temple-card-body-closure";
            let templeClosureH2 = document.createElement("h2");
            templeClosureH2.textContent = "Closure";
            templeClosure.append(templeClosureH2);
            let closureList = document.createElement("ul");
            for(i=0; i < element.temple_closure_schedule.length; i++) {
                let li = document.createElement("li");
                li.textContent = element.temple_closure_schedule[i];
                closureList.append(li);
            }
            templeClosure.append(closureList);

            // ordinance_schedule
            let ordinanceSchedule = document.createElement("div");
            ordinanceSchedule.className = "temple-card-body-ordinance-schedule";
            ordinanceSchedule.innerHTML = `<h2>Ordinance Schedule</h2><p>${element.ordinance_schedule}</p>`;

            // session_schedule
            let sessionSchedule = document.createElement("div");
            sessionSchedule.className = "temple-card-body-session-schedule";
            sessionSchedule.innerHTML = `<h2>Session Schedule</h2><p>${element.session_schedule}</p>`;

            // store the body parts in the body container
            templeCardBody.append(templeInformation);
            templeCardBody.append(templeServices);
            templeCardBody.append(templeClosure);
            templeCardBody.append(ordinanceSchedule);
            templeCardBody.append(sessionSchedule);
            //store the body in the card
            templeCard.append(templeCardBody);


            // store the card in the cardsContainer
            templeContainer.append(templeCard);

        })
    })
