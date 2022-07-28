'use strict';

require("dotenv").config()
const { default: axios } = require("axios");
const express = require("express");
const path = require("path");
const app = express();

const API_KEY = process.env.NASA_API_KEY
const PORT = process.env.PORT | 6060;
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`


app.set('views', path.join(__dirname, './views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,"public")));

app.get("/",async (req,res)=>{
    const response = await axios.get(URL);
    res.render('index',{data: response.data});
})

app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}/`))