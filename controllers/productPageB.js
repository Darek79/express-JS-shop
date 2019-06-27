const fs = require("fs");
const path = require("path");
const util = require("util");
const readCart = require("./getCartData");
const prodPath = path.join(__dirname, "..", "katalog", "ProductData.json");

exports.productPageB = async (req, res) => {
    const t = req.params.title;
    const ind = req.params.ind;
    const url = req.originalUrl;

    const readData = util.promisify(fs.readFile);

        const getData = async () => {
        const data = await readData(prodPath, "utf8");
        const dataJSON = await JSON.parse(data);
        return Promise.resolve([dataJSON[ind]]) ;
                   
    }

    const cartJSON = await readCart.cartData();

    const prodData = await getData();

    const title = await prodData[0].title;
    const sizes = await prodData[0].sizes;
    const brand = await prodData[0].brand;
    const tprice = await prodData[0].price;
    const price =  await tprice[0].replace(".",",");
    const imgDetails = await prodData[0].imgDetails;


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