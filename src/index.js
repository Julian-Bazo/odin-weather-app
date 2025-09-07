import "./styles.css";

console.log("Server online");
import search from "./search";

const submitLocationButton = document.querySelector(".submit-location");

submitLocationButton.addEventListener("click", search);
