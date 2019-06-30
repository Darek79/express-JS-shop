const sideData = require("../katalog/sidebar.json");

exports.getSidebarData = async(req,res)=>{
    const categ = await req.body.cat;
    
    res.status(200).json({
        dataItem: sideData[categ]
    })

}