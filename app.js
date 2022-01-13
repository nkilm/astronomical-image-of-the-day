
/* 

Your API key for nikhil.2002.coc@gmail.com is:

9IVcc1x36D2bJyhWrd9Qqd83DhsThAJCr1UGBZN0
 
*/

const URL = "https://api.nasa.gov/planetary/apod?api_key=9IVcc1x36D2bJyhWrd9Qqd83DhsThAJCr1UGBZN0";

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




