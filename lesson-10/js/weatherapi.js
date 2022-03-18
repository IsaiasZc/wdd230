const apiURL = `https://api.openweathermap.org/data/2.5/weather?&q=Fairbanks&appid=31b886c84c9c9db98eeba6960d675bee`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        const iconSrc = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        document.querySelector("#current-temp").textContent = jsonObject.main.temp;
        document.querySelector("#icon-src").textContent = iconSrc;
        document.querySelector("#weathericon").setAttribute("src", iconSrc);
        document.querySelector("#weathericon").setAttribute("alt", desc);
        document.querySelector("figcaption").textContent = desc;
    });
