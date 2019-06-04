const fs = require("fs");
const path = require("path");
const util = require("util");
const prodPath = path.join(__dirname,"..","katalog","ProductData.json");


exports.loadFrontPics = async(req,res)=>{

    const dataRead = util.promisify(fs.readFile);

    const fileRead =async()=>{
        const data= await dataRead(prodPath,"utf8");
        return JSON.parse(data);
    }
    const data = await fileRead();

    const prodPics = await data.map((val,i)=>{
        if(i <= 4){
            return {
                path: val.imgDetails[0].path.slice(23,56),
                name: val.imgDetails[0].path.substring(29,45),
                title: val.title
            }
        }
        
    });
    prodPics.pop();

    const slidePics = await data[5].imgDetails.map((val,i)=>{ 
        return  {
             path: val.path.slice(23,56),
             name: val.path.substring(29,45),
             title: val.title
         }
     });

        res.render("home",{slidePics,prodPics,prodPageC:"/prodPageC",prodPage:"/prodPageB"})

};











