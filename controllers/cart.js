const fs = require("fs");
const path = require("path");
const util = require("util");

const cartP = path.join(__dirname, "..", "katalog", "cart.json");

exports.addToCart = async (req, res) => {

    const cartProd = await req.body;
    cartProd.d = new Date().toISOString();

    const pex = util.promisify(fs.exists);
    const readData = util.promisify(fs.readFile);
    const writeData = util.promisify(fs.writeFile);

    const readCart = async () => {
        const exist = await pex(cartP);
        if (!exist) {
            const prodArr = [];
            prodArr.push(cartProd);
            fs.writeFile(cartP, JSON.stringify(prodArr), (err) => {
                if (err) throw err;
                
            });
            return await prodArr;
        } else {
            console.log("cart updated");
            let cartFiles;
            cartFiles = await readData(cartP);
            const dJSON = JSON.parse(cartFiles);
            dJSON.push(cartProd);
            writeData(cartP,JSON.stringify(dJSON));
            return await dJSON;
        }
    };

    const cartFiles = await readCart();

    res.status(201).json({
        message: "cart updated",
        cartFiles
    });
}

