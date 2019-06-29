const readCart = require("./getCartData");
const path = require("path");
const fs = require("fs");
const actualV = require("../model/getTotalVal");
const cartP = path.join(__dirname, "..", "katalog", "cart.json");

let totalS;

exports.deleteCartItem = async(req,res)=>{

    const t = await req.body.dI;
    const cartJSON = await readCart.cartData();
    const updatedCart = await cartJSON.filter((val,i)=>{
        if(i===0){
            return;
        }
        if(val.t !== t){
           return val
        }   
    });
    
   
    const cartF = updatedCart;
  
    fs.writeFileSync(cartP,JSON.stringify(updatedCart),(err)=>{
        if(err) throw err;
    });
   
    if(cartF.length > 0){
        totalS = await actualV.totalVal(cartF);
    } else {
        totalS = "0.00";
    }
    
    console.log(totalS);
    res.status(201).json({
        message: "item deleted",
        cartF,
        totalS
    });
}