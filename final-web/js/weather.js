const geoLocation = navigator.geolocation;

geoLocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=31b886c84c9c9db98eeba6960d675bee`;
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsonObject) => {
            console.log(jsonObject);

            // Create the elements for the current weather
            let img = document.createElement('img');
            let imgContainer = document.querySelector(".weather-current-img");
            // console.log(document.querySelector(".weather-current-img"));
            let currentTemp = document.getElementById("weather-current-temperature");
            let currentDescri = document.getElementById("weather-current-description");
            let currentHum = document.getElementById("weather-current-humidity");

            // Call the img properties
            
            img.setAttribute("src", `https://openweathermap.org/img/w/${jsonObject.current.weather[0].icon}.png`)
            let descri = jsonObject.current.weather[0].description;
            img.setAttribute("alt", descri);
            img.setAttribute("class", "img-cover");
            currentDescri.textContent = descri;

            // set the other attributes
            currentTemp.textContent = jsonObject.current.temp;
            currentHum.textContent = jsonObject.current.humidity;


            // append the img to the container
            imgContainer.append(img);

            // get the weather for next 3 days
            
            for(i=1; i<4; i++) {
                // Call the container
                let weatherNext = document.querySelector(`.weather-next-${i}`)

                // Calculate the date
                let forecastDay = new Date(jsonObject.daily[i].dt * 1000);

                // Store the date in a variable
                let forecastDate = document.createElement("h3");
                forecastDate.textContent = forecastDay.getDate() + "/" + (forecastDay.getMonth() + 1) + "/" +forecastDay.getFullYear();

                // create the img
                let forecastImg = document.createElement('img');
                forecastImg.setAttribute("src", `https://openweathermap.org/img/w/${jsonObject.daily[i].weather[0].icon}.png`);
                forecastImg.setAttribute("alt", jsonObject.daily[i].weather[0].description);

                // store the temperature
                let forecastTemp = document.createElement("h3");
                forecastTemp.textContent = jsonObject.daily[i].temp.day + " F°";

                // insert all in the container
                weatherNext.append(forecastDate);
                weatherNext.append(forecastImg);
                weatherNext.append(forecastTemp);

            }
            
            //* Create the Alerts
            // let jsontest = "./test-json";  
            if (jsonObject.alerts != undefined) {
                let alertContainer = document.querySelector(".weather-alert");
                let alertMessage = document.querySelector("#weather-message");
                let closeButton = document.querySelector("#close-alert");

                //make the alert visible
                alertMessage.classList.remove("alert-close");

                // configure the message
                let message = jsonObject.alerts[0].description;
                alertMessage.innerHTML = "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.";

                //make the button closeable
                closeButton.addEventListener("click", () => {
                    // make the alert invisible
                    alertContainer.classList.add("alert-close");
                })
                
            }
            console.log(jsonObject.alerts);

        })
});


