const getData = require("./readingServingData");

exports.loadFrontPics = async(req,res)=>{
    const data = await getData.readingData();
    const slidePics = [];
    data[5].imgDetails.forEach((val) => {
       
       const imgCont = {
            path: val.path.slice(23,56),
            name: val.path.substring(29,45)
        }
        slidePics.push(imgCont);
      
    });
    console.log(slidePics);
    
    res.render("home",{slideImg:slidePics})

};











