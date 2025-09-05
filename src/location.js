import Weather from "./weatherObject";

const reporter = document.querySelector(".reporter");

export default async function getLocationTemp(city) {
    let location = city;
    try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NYCJ5G62WGR8PDVCLDXLGCWBY`, {mode: `cors`});
    const weatherData = await response.json();
    let weatherObject = await new Weather(`${weatherData.address}`, `${weatherData.currentConditions.conditions}`, `${weatherData.currentConditions.temp}`, `${weatherData.currentConditions.feelslike}`);
    reporter.textContent = "";
    return weatherObject;
    }
    catch(error) {
        console.log(error);
        reporter.textContent = "Invalid location!"
        reporter.style.color = "red";
    }
}

function toCelsius(num) {
    let celsius = ((num - 32) * (5/9)).toPrecision(3);
    return celsius;
}


export {toCelsius};