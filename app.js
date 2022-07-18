import { NASA_API_KEY } from "./key.js";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY }`

const image = document.querySelector("#image");
const title = document.querySelector(".title");
const date = document.querySelector(".date");
const explanation = document.querySelector(".explanation");
const copyright = document.querySelector(".copyright");

fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        title.textContent = data.title;
        date.textContent = data.date;
        image.setAttribute("alt",data.title);
        image.src = data.hdurl;
        explanation.textContent = data.explanation;
        copyright.textContent = data.copyright;
    })