const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const katalogData = require("../models/readingServingData");
// const upload = upload.single("img");

//path declaration where to save data
const p = path.join(__dirname,"..","katalog","data.json");
const imgP = path.join(__dirname,"..","katalog","img");




router.get("/admin",(req,res)=>{
        
        res.render("adminPage");

});



router.post("/prodData",(req,res)=>{
    const title = req.body.title;
    const price = req.body.price;
    const desc = req.body.desc;
    const imgURL = req.file.path;

    console.log(title,price,desc,imgURL);

    const getData = new katalogData(title,price,desc,imgURL);
    getData.saveData();

    res.redirect("/admin");
})

module.exports = router;