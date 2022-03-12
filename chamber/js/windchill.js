const apiURL = "http://api.openweathermap.org/data/2.5/weather?&q=Lima&units=Imperial&appid=31b886c84c9c9db98eeba6960d675bee";
let temperature,windSpeed;

fetch(apiURL)
    .then((responde) => responde.json())
    .then((jsonObject) => {
        // console.log(jsonObject)
        const iconSrc = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        document.querySelector("#weather-description").textContent = desc;
        document.querySelector("#temperature").textContent = jsonObject.main.temp;
        temperature = jsonObject.main.temp;
        windSpeed = jsonObject.wind.speed;
        document.querySelector("#wind-speed").textContent = windSpeed;
        document.querySelector("#weather-icon").setAttribute("src", iconSrc);
        document.querySelector("#weather-icon").setAttribute("alt", desc);
    })

// -------------- Calculate the Wind Chill -----------------


// let temperature =parseInt(document.getElementById('temperature').innerHTML);
// let windSpeed = parseFloat(document.getElementById('wind-speed').innerHTML);

// let calculateWindChill = 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (.4275 * temperature * (windSpeed ** .16))

const calculateWindChill = (t, s) => {
    if( t <= 50 && s >3){
    let windChill = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (.4275 * t * (s ** .16));
    return windChill.toFixed(2)
    } else {
        return  "N/A"
    }
}

let windChill = document.getElementById('wind-chill');

windChill.innerHTML = calculateWindChill(temperature, windSpeed);