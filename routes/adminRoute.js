const express = require('express');
const app = express();
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const upload = upload.single("img");



router.get("/admin",(req,res)=>{
    
    res.render("adminPage");
});



router.post("/prodData",upload,async(req,res)=>{
    const title = await req.body.title;
    const price = await req.body.price;
    const desc = await req.body.description;

    const img = await fs.readFileSync(req.file.path);
    const encodeIMG = img.toString("base64");
    const fileName = await req.file.filetype;
    const contentType = await req.file.mimetype
    const image =  await Buffer.from(encodeIMG,"base64");


    const descFile = await {
        title,
        price,
        desc,
        img : {
            fileName,
            contentType,
            image
        }
    };

    const itemData = Buffer.from(descFile);
    const json = await JSON.stringify(itemData);



(async()=>{
    console.log(await json);
})();
    

    res.redirect("/admin");
})

module.exports = router;