
/* 

Your API key for nikhil.2002.coc@gmail.com is:

9IVcc1x36D2bJyhWrd9Qqd83DhsThAJCr1UGBZN0
 
*/

const URL = "https://api.nasa.gov/planetary/apod?api_key=9IVcc1x36D2bJyhWrd9Qqd83DhsThAJCr1UGBZN0";

const image = document.querySelector("#image");


fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        image.setAttribute("alt",data.title);
        image.src = data.hdurl;
    })
