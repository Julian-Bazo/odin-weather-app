const image = document.querySelector("img");
import loadingGif from "./img/loading.gif";

export default async function fetchImage(input) {
            try {
                image.src = loadingGif;
                const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=KrH4ZBbqdmj6lDM1qvHmkzdpzKje8C7F&s=${input}`, {mode: "cors"});
                const imgData = await response.json();
                image.src = imgData.data.images.original.url;
            }
            catch(error) {
                console.log(error);
            }
        }