const readCart = require("./getCartData");
const actualV = require("../model/getTotalVal");

exports.cartFiles =async(req,res)=>{
    const cartJSON = await readCart.cartData();
    const url = req.originalUrl;

    const totalS = await actualV.totalVal(cartJSON);

    res.render("cartView",{url,cartJSON,t:totalS})
}

