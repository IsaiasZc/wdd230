let temperature =parseInt(document.getElementById('temperature').innerHTML);
let windSpeed = parseFloat(document.getElementById('wind-speed').innerHTML);

// let calculateWindChill = 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (.4275 * temperature * (windSpeed ** .16))

const calculateWindChill = (t, s) => {
    if( t <= 50 && s >3){
    let windChill = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (.4275 * t * (s ** .16))
    return windChill.toFixed(2)
    } else {
        return  "N/A"
    }
}

let windChill = document.getElementById('wind-chill');

windChill.innerHTML = calculateWindChill(temperature, windSpeed);