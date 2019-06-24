
const express = require('express');
const router = express.Router();
const imgDisplay = require("../controllers/frontPagePics");
const prodPageC = require("../controllers/productPageC");
const prodPageB = require("../controllers/productPageB");
const prod = require("../controllers/cart");

router.get("/",imgDisplay.loadFrontPics);

router.get("/prodPageB/:title/:ind",prodPageB.productPageB);
router.get("/prodPageC/:title/:ind",prodPageC.productPageC);
router.post("/addToCart",prod.addToCart);

router.use((req,res)=>{
    res.status(404).render("error");
});

module.exports = router;