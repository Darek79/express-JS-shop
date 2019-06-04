const fs = require("fs");
const path = require("path");
const prodPath = path.join(__dirname,"..","katalog","ProductData.json");
const carusselPath = path.join(__dirname,"..","katalog","carusselData.json");

// const dataPath = dataPath === 1?prodPath:carusselPath;
// console.log(dataPath);
// const title = req.body.title;
// const sizes = req.body.sizes
// const brand = req.body.brand;
// const colors = req.body.colors;
// const price = req.body.price;
// const desc = req.body.desc;
// const imgURL = req.file.path;


module.exports = class ReadingSavingData {
    constructor(opt,t,s,b,c,p,d,u){
        this.opt = opt;
        this.t = t;
        this.s = s;
        this.b = b;
        this.c = c;
        this.p = p;
        this.d = d;
        this.u = u;
       
    }

    static async readingData(param){

        return new Promise((res,rej)=>{
            
            if(fs.existsSync(param)){
                fs.readFile(param,"utf8",(err,data)=>{
                    res(JSON.parse(data));
                });
            }else {
                res([]);
            }
        })
    }

    async saveData(){
        const param = this.opt === "prod"?prodPath:carusselPath;
        const stream = await ReadingSavingData.readingData(param);

        const katalogData = await{
            title: this.t.split(","),
            sizes: this.s.split(","),
            brand: this.b.split(","),
            colors: this.c.split(","),
            price: this.p.split(","),
            description: this.d.split(","),
            imgDetails: []
                    
        }

        this.u.forEach(async (val) => {
            // let imgName = val.originalname.substr(0,9);
            let detailsObj = {  
                mimetype: val.mimetype,
                path: val.path
    
            }
           await katalogData.imgDetails.push(detailsObj)    
        });

        await stream.push(katalogData);
        // const finalStream = await fs.createWriteStream(dataPath,stream);
        // stream.pipe(finalStream);
        return new Promise((res,rej)=>{
            fs.writeFile(param,JSON.stringify(stream),(err)=>{
                if(err) throw err;
                console.log(param);
                res(console.log("saved"));
            });
        });
     
    }
};