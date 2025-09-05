const image = document.querySelector("img");

export default async function fetchImage(input) {
            try {
                const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=KrH4ZBbqdmj6lDM1qvHmkzdpzKje8C7F&s=${input}`, {mode: "cors"});
                const imgData = await response.json();
                image.src = imgData.data.images.original.url;
            }
            catch(error) {
                console.log(error);
            }
        }