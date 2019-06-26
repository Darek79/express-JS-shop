const fs = require("fs");
const path = require("path");
const util = require("util");

const cartP = path.join(__dirname,"..","katalog","cart.json");
const p = path.join(__dirname, "..", "katalog", "carusselData.json");

exports.addToCart = async(req,res)=>{

    console.log(typeof(req.body));
    const cartProd = await req.body;
//   const readData = util.promisify(fs.readFile);

//     const readJSON = async () => {
//         const data = await readData(p, "utf8");
//         const dataJSON = JSON.parse(data);
//         return await dataJSON[0];
//         // return Promise.resolve(dataJSON[0]);
//     }
//     const prodData = await readJSON();
    // console.log(prodData);

    const pex = util.promisify(fs.exists);
    const readData = util.promisify(fs.readFile);
    const writeData = util.promisify(fs.writeFile);

    const checkCart =async()=>{
        const exist = await pex(cartP);
        const date = new Date().toISOString();
        if(!exist){
           const prodArr = [];
           prodArr.push(cartProd);
           prodArr.push(date);
           fs.writeFile(cartP,JSON.stringify(prodArr),(err)=>{
               if(err) throw err;
               console.log("cart created");
           })
        }
        // (async()=>{
        //     console.log(await cartProd);
        // })();
       
        
    }
    checkCart();
    // const d = await checkCart();
    // (async()=>{
    //     console.log(await d);
    // })();




    res.status(201).json({
        message:"cart updated"
    });
}

