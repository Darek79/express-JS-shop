const getData = require("./readingServingData");

exports.productPageC =async(req,res)=>{
    const prodTitle = req.params.title;
    console.log(prodTitle);
    // const data = await getData.readingData();
    // console.log(data[5])
    // const slidePics = await data[5].map((val,i)=>{       console.log(val)
    //     return  {
    //          path: val.path.slice(23,56),
    //          name: val.path.substring(29,45),
    //          ind: i
    //      }
    //  });

    res.redirect("/")
    
}