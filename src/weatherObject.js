import { toCelsius } from "./location";

export default class Weather {
    constructor(location, conditions, tempF, feelsF) {
        this.location = location;
        this.conditions = conditions;
        this.tempF = tempF;
        this.feelsF = feelsF;
        this.tempC = toCelsius(tempF);
        this.feelsC = toCelsius(feelsF);
        this.data = []
    }

    displayCelsius() {
        let celsiusData = [this.location, this.conditions, this.tempC, this.feelsC];
        this.data = celsiusData;
        console.log(this.data);
    }

    displayFahrenheit() {
        let fahrenheitData = [this.location, this.conditions, this.tempF, this.feelsF];
        this.data = fahrenheitData;
        console.log(this.data);
    }




}