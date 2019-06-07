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

    const title = prodData.title;
    const sizes = prodData.sizes;
    const brand = prodData.brand;
    const price = prodData.price;
    const imgDetails = prodData.imgDetails;

    res.render("productPage", {
        prodData
    });
}