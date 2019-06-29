const readCart = require("./getCartData");


exports.deleteCartItem = async(req,res)=>{

    const ind = await JSON.parse(req.body.dI);
    console.log(ind);
    const cartJSON = await readCart.cartData();

    const updatedCart = cartJSON.filter((val,i)=>{
        if(i !== ind){
           return val
        }
        
    })  
    console.log(updatedCart);
    res.status(201).json({
        message: "item deleted",
        updatedCart
    });
}