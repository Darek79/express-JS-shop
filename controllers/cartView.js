const readCart = require("./getCartData");

exports.cartFiles =async(req,res)=>{
    const cartJSON = await readCart.cartData();
    const url = req.originalUrl;
    console.log(cartJSON);
    res.render("cartView",{url,cartJSON})
}

