const sideData = require("../katalog/sidebar.json");

exports.getSidebarData = async(req,res)=>{
    const categ = await req.body.cat;
    const def = await req.body.def;

    const data = def === "def"?sideData.damen:sideData[categ];

    const [{backImg}] = data
    const links = data[1].links;
    
    res.status(200).json({
        backImg,
        links
    })

}