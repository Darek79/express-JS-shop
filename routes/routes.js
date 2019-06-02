
const express = require('express');
const router = express.Router();
const imgDisplay = require("../controllers/frontPagePics");

router.get("/",imgDisplay.loadFrontPics);



router.use((req,res)=>{
    res.status(404).render("error");
});


module.exports = router;