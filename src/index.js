import "./styles.css";

console.log("Server online");
import search from "./search";

const submitLocationButton = document.querySelector(".submit-location");

submitLocationButton.addEventListener("click", search);



// KEY: NYCJ5G62WGR8PDVCLDXLGCWBY

// Check out dynamic imports?
// Loading component
// Maybe integrate passing through the three day forecast
    // Not really much more learning other than just doing obj.forecast.whatever