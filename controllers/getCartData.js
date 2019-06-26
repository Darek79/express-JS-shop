const path = require("path");
const fs = require("fs");
const util = require("util");
const cartP = path.join(__dirname, "..", "katalog", "cart.json");

const cartData = util.promisify(fs.readFile);

exports.getCartData = cartData(cartP);