import displayInformation from "./display";
import getLocationTemp from "./location";

const searchInput = document.querySelector("#location");

export default function search() {
    if (searchInput.value !== "") {
        displayInformation(getLocationTemp(searchInput.value));
    }
}

