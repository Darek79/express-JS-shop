const getData = require("./readingServingData");

const data = await getData.readingData();
    
 

const arr = [];

data.forEach((val)=>{
    console.log(val.imgDetails[0].path);
})