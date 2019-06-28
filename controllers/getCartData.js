const path = require("path");
const fs = require("fs");
const util = require("util");
const cartP = path.join(__dirname, "..", "katalog", "cart.json");

const pex = util.promisify(fs.exists);
const cartFiles = util.promisify(fs.readFile);

exports.cartData =async()=>{
    console.log("dsds");
    const exist = await pex(cartP);
    if(exist){
        const cart = await cartFiles(cartP);
        const cartJSON = JSON.parse(cart);
        // console.log(cartJSON);
        return cartJSON;
    } else {
        return await 0;
    }

}
