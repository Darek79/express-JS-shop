const readCart = require("./getCartData");

exports.cartFiles =async(req,res)=>{
    const cartJSON = await readCart.cartData();
    const url = req.originalUrl;

    const n = [];
    cartJSON.forEach((val)=>{
        if(val.p){
            n.push(parseFloat(val.p));
        }
    });
    const t = n.reduce((a,b)=>{
        return a+b;
    });
   
    res.render("cartView",{url,cartJSON,t:t.toString()})
}

