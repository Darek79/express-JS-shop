const fs = require("fs");
const path = require("path");
const util = require("util");
const prodPath = path.join(__dirname, "..", "katalog", "ProductData.json");

exports.productPageB = async (req, res) => {
    const t = req.params.title;
    const ind = req.params.ind;

    const readData = util.promisify(fs.readFile);

        const getData = async () => {
        const data = await readData(prodPath, "utf8");
        const dataJSON = await JSON.parse(data);
        return Promise.resolve([dataJSON[ind]]) ;
                   
    }

    const prodData = await getData();

    const title = await prodData[0].title;
    const sizes = await prodData[0].sizes;
    const brand = await prodData[0].brand;
    const tprice = await prodData[0].price;
    const price =  await tprice[0].replace(".",",");
    const imgDetails = await prodData[0].imgDetails;
    console.log(title.length);

    res.render("productPage", {
        title,
        sizes,
        brand,
        price,
        imgDetails
    });


}