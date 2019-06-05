
const express = require('express');
const app = express();
const router = express.Router();
const imgDisplay = require("../controllers/frontPagePics");
const prodPageC = require("../controllers/productPageC");
const prodPageB = require("../controllers/productPageB");

router.get("/",imgDisplay.loadFrontPics);

router.get("/prodPageB/:title/:ind",prodPageB.productPageB);

router.get("/prodPageC/:title/:ind",prodPageC.productPageC);

router.use((req,res)=>{
    res.status(404).render("error");
});


module.exports = router;