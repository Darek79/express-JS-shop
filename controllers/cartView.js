const readCart = require("./getCartData");

exports.cartFiles =async(req,res)=>{
    const cartJSON = await readCart.cartData();
    (async()=>{
        console.log(await cartJSON);
    })
    console.log("here");
    res.redirect("/")
}

