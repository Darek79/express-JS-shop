
const express = require('express');
const router = express.Router();
const imgDisplay = require("../controllers/frontPagePics");
const prodPageC = require("../controllers/productPageC");
const prodPageB = require("../controllers/productPageB");
const prod = require("../controllers/cart");
const readCart = require("../controllers/getCartData");

router.get("/",imgDisplay.loadFrontPics);

router.get("/prodPageB/:title/:ind",prodPageB.productPageB);
router.get("/prodPageC/:title/:ind",prodPageC.productPageC);
router.post("/addToCart",prod.addToCart);
router.get("/getCart",async(req,res)=>{
    const cartJSON = await readCart.cartData();
    res.status(200).json({
        cartJSON
    })
})

router.use((req,res)=>{
    res.status(404).render("error");
});

module.exports = router;