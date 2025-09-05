const informationContainer = document.querySelector(".information-container");
const selectTemp = document.querySelector(".scale-select");
const reporter = document.querySelector(".reporter");


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

        if (selectedScale === "ºC") {
            tempDiv.textContent = `Temperature: ${result.tempC} ºC`;
            feelsTempDiv.textContent = `RealFeel: ${result.feelsC} ºC`;
        }
    }

}