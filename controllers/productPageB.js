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
        return Promise.resolve(dataJSON[ind]) ;
                   
    }

    const prodData = await getData();
    // const title = await prodData.title;
    // const sizes = await prodData.sizes;
    // const brand = await prodData.brand;
    // const price = await prodData.price;
    // const imgDetails = await prodData.imgDetails;
   const {title}= [{prodData}];
   console.log(title);
    // console.log(imgDetails);

    res.render("productPage", {
        title,
        sizes,
        brand,
        price,
        imgDetails
    });


}