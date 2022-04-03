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
            console.log(document.querySelector(".weather-current-img"));
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
            
            for(i=0; i<3; i++) {
                // Call the container
                let weatherNext = document.querySelector(`.weather-next-${i + 1}`)

                // Calculate the date
                let forecastDay = new Date(jsonObject.daily[i].dt * 1000);
                console.log(forecastDay);

                // Store the date in a variable
                let forecastDate = document.createElement("h3");
                forecastDate.textContent = forecastDay.getDate() + "/" + forecastDay.getMonth() + "/" +forecastDay.getFullYear();

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

        })
});
