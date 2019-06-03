const getData = require("./readingServingData");

exports.productPageB =async(req,res)=>{
    const prodTitle = req.params.title;

    const data = await getData.readingData();
    const prodPageDetails = await data.map((val)=>{
        if(val.title === prodTitle){
            return val
        }
        
    });


    res.redirect("/")

    
}