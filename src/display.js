const informationContainer = document.querySelector(".information-container");
const selectTemp = document.querySelector(".scale-select");
const reporter = document.querySelector(".reporter");
const image = document.querySelector("img");
const body = document.body;

import fetchImage from "./weatherGif";


export default async function displayInformation(obj) {
    while (informationContainer.firstChild) {
        informationContainer.removeChild(informationContainer.lastChild);
    }

    const locationDiv = document.createElement("div");
        informationContainer.appendChild(locationDiv);
    const conditionsDiv = document.createElement("div");
        informationContainer.appendChild(conditionsDiv);
    const tempDiv = document.createElement("div");
        informationContainer.appendChild(tempDiv);
    const feelsTempDiv = document.createElement("div");
        informationContainer.appendChild(feelsTempDiv);

    
    
    let result = await obj;
    let selectedScale = selectTemp.value;

    if (reporter.textContent === ""){
        locationDiv.textContent = `Location: ${result.location}`;
        conditionsDiv.textContent = `Conditions: ${result.conditions}`;
        tempDiv.textContent = `Temperature: ${result.tempF} ºF`;
        feelsTempDiv.textContent = `RealFeel: ${result.feelsF} ºF`;
        
        if (result.conditions.includes("cloud") && result.conditions.includes("Partial")) {
            fetchImage("light clouds");
            console.log("Partially cloudy day");
            body.style.backgroundColor = "#eee";
        }

        if (result.conditions.includes("cloud") && !result.conditions.includes("Partial") || result.conditions.includes("Overcast")) {
            fetchImage("clouds");
            console.log("Cloudy day");
            body.style.backgroundColor = "#b2b2b2ff";
        }

        if (result.conditions.includes("Clear")) {
            fetchImage("Sun");
            console.log("Clear day");
            body.style.backgroundColor = "#fffa78ff";
        }

        if (result.conditions.includes("rain") || result.conditions.includes("Rain")) {
            fetchImage("rain");
            console.log("Rainy day");
            body.style.backgroundColor = "#43b3feff";
        }

        if (result.conditions.includes("storm") || result.conditions.includes("Storm")) {
            fetchImage("Storm cloud");
            console.log("Storms!");
            body.style.backgroundColor = "#ab6dfdff";
        }

        if (result.conditions.includes("snow") || result.conditions.includes("Snow")) {
            fetchImage("Snow");
            console.log("Snowy day");
            body.style.backgroundColor = "#71fdffff";
        }
        
            image.style.border = "2px solid black";
            image.style.borderRadius = "1rem";
        // fetchImage(result.conditions)

        if (selectedScale === "ºC") {
            tempDiv.textContent = `Temperature: ${result.tempC} ºC`;
            feelsTempDiv.textContent = `RealFeel: ${result.feelsC} ºC`;
        }
    }

}