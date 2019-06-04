const express = require('express');
const app = express();
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const katalogData = require("../controllers/readingServingData");
// const upload = upload.single("img");

//path declaration where to save data
const p = path.join(__dirname,"..","katalog","data.json");
const imgP = path.join(__dirname,"..","katalog","img");


router.get("/admin",(req,res)=>{
    res.render("adminPage");
});


router.post("/prodData",(req,res)=>{
   
    const pathOpt = req.body.prod;
    const title = req.body.title;
    const sizes = req.body.sizes
    const brand = req.body.brand;
    const colors = req.body.colors;
    const price = req.body.price;
    const desc = req.body.desc;
    const imgURL = req.files;

    // console.log(title,sizes,brand,colors,price,desc,imgURL);
    // app.get("pathNr"),
    const getData = new katalogData(pathOpt,title,sizes,brand,colors,price,desc,imgURL);
    getData.saveData();

    res.redirect("/admin");
});



module.exports = router;