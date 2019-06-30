const fs = require("fs");
const path = require("path");
const util = require("util");
const readCart = require("./getCartData");
const readData = util.promisify(fs.readFile);
const p = path.join(__dirname, "..", "katalog", "carusselData.json");

exports.productPageC = async (req, res) => {
    const ind = req.params.ind;
    const url = req.originalUrl;
    
    const cartJSON = await readCart.cartData();

    const readJSON = async () => {
        const data = await readData(p, "utf8");
        const dataJSON = await JSON.parse(data);
        return Promise.resolve([dataJSON[ind]]);
    };
    
    const prodData = await readJSON();

    const [{title,sizes,brand,price,imgDetails}] =await prodData;
    
    res.render("productPage", {
        title,
        sizes,
        brand,
        price,
        imgDetails,
        url,
        cartJSON
    });
}