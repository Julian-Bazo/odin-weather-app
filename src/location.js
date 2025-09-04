

export default async function getLocationTemp(city, celsius) {
    let location = city;
    try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NYCJ5G62WGR8PDVCLDXLGCWBY`, {mode: `cors`});
    const weatherData = await response.json();
    if (celsius === true) {
        console.log(`Temperature: ${toCelsius(weatherData.currentConditions.temp)}°C`);
    }
    else {
        console.log(`Temperature: ${weatherData.currentConditions.temp}°F`);
    }
    console.log(weatherData);
    }
    catch(error) {
        console.log(error);
    }

}

function toCelsius(num) {
    let celsius = ((num - 32) * (5/9)).toPrecision(3);
    return celsius;
}

