const fs = require("fs");
const path = require("path");
const util = require("util");
const prodPath = path.join(__dirname,"..","katalog","ProductData.json");

exports.productPageB =async(req,res)=>{
    const t = req.params.title;
    const ind = req.params.ind;

    const readData = util.promisify(fs.readFile);

    const getData=async()=>{
        const data = await readData(prodPath,"utf8");
        const processData = JSON.parse(data);
        return new Promise((res,rej)=>{      
            res(processData[ind]);
        })
    }
    const data = await getData();

    console.log(data);


    res.redirect("/")

    
}