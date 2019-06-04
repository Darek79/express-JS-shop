const fs = require("fs");
const path = require("path");
const util = require("util");
const prodPath = path.join(__dirname,"..","katalog","ProductData.json");

exports.productPageB =async(req,res)=>{
    const prodTitle = req.params.title;

    const readData = util.promisify(fs.readFile);

    const getData=async()=>{
        const data = await readData(prodPath,"utf8");
        return JSON.parse(data);
    }
    const data = await getData();

    const prodPageDetails = await data.map((val)=>{
        if(val.title === prodTitle){
            return val
        }
        
    });


    res.redirect("/")

    
}