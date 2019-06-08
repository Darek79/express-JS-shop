const fs = require("fs");
const path = require("path");
const util = require("util");

const p = path.join(__dirname, "..", "katalog", "carusselData.json");

exports.productPageC = async (req, res) => {
    const t = req.params.title;
    const ind = req.params.ind;

    const readData = util.promisify(fs.readFile);

    const readJSON = async () => {
        const data = await readData(p, "utf8");
        const dataJSON = await JSON.parse(data);
        return Promise.resolve([dataJSON[ind]]);
    }
    const prodData = await readJSON();
    // console.log(prodData[0].title);
    // console.log(prodData[0].sizes)


    const title = await prodData[0].title;
    const sizes = await prodData[0].sizes;
    const brand = await prodData[0].brand;
    const price = await prodData[0].price;
    const imgDetails =await prodData[0].imgDetails;
    
    console.log(title.length);

    res.render("productPage", {
        title,
        sizes,
        brand,
        price,
        imgDetails
    });
}