const fs = require("fs");
const path = require("path");
const util = require("util");
const prodPath = path.join(__dirname, "..", "katalog", "ProductData.json");
const carusPath = path.join(__dirname, "..", "katalog", "carusselData.json");


exports.loadFrontPics = async (req, res) => {

    const dataRead = util.promisify(fs.readFile);
    const sliderPics = util.promisify(fs.readFile);

    const fileReadP = async () => {
        const data = await dataRead(prodPath, "utf8");
        return JSON.parse(data);
    }
    const data = await fileReadP();

    const prodPics = await data.map((val, i) => {
        if (i <= 4) {
            return {
                path: val.imgDetails[0].path.slice(23, 56),
                name: val.imgDetails[0].path.substring(29, 45),
                title: val.title,
                ind: i
            }
        }

    });
    prodPics.pop();

    const fileReadC = async() => {
        const data = await sliderPics(carusPath, "utf8");
        return JSON.parse(data);
    }
    const slideData = await fileReadC();

    const slidePics = await slideData.map((val,i) => {
        return { 
            path: val.imgDetails[0].path.slice(23,56),
            name: val.imgDetails[0].path.slice(33, 45),
            title: val.title[0].slice(13, 45)+val.imgDetails[0].path.slice(33, 45),
            ind: i
        }
    });
    
    res.render("home", {
        slidePics,
        prodPics,
        prodPageC: "/prodPageC",
        prodPage: "/prodPageB"
    })

};