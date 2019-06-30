const sideData = require("../katalog/sidebar.json");

exports.getSidebarData = async(req,res)=>{
    const categ = await req.body.cat;
    const def = await req.body.def;

    let data = def === "def"?sideData.damen:sideData[categ];
    
    res.status(200).json({
        dataItem: data
    })

}