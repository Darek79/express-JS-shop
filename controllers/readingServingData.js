const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname,"..","katalog","ProductData.json");

// const title = req.body.title;
// const sizes = req.body.sizes
// const brand = req.body.brand;
// const colors = req.body.colors;
// const price = req.body.price;
// const desc = req.body.desc;
// const imgURL = req.file.path;


module.exports = class ReadingSavingData {
    constructor(t,s,b,c,p,d,u){
        this.t = t;
        this.s = s;
        this.b = b;
        this.c = c;
        this.p = p;
        this.d = d;
        this.u = u;
    }

    static async readingData(){
        
        return new Promise((res,rej)=>{
            if(fs.existsSync(dataPath)){
                fs.readFile(dataPath,"utf8",(err,data)=>{
                    res(JSON.parse(data));
                });
            }else {
                res([]);
            }
        })
    }

    async saveData(){
        const stream = await ReadingSavingData.readingData();

        const katalogData = await{
            title: this.t,
            sizes: this.s.split(","),
            brand: this.b,
            colors: this.c.split(","),
            price: this.p,
            description: this.d,
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
            fs.writeFile(dataPath,JSON.stringify(stream),(err)=>{
                if(err) throw err;
                res(console.log("saved"));
            });
        });
     
    }
};