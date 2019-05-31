const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname,"..","katalog","data.json");

module.exports = class ReadingSavingData {
    constructor(t,p,d,u){
        this.t = t;
        this.p = p;
        this.d = d;
        this.u = u;
    }

    static async readingData(){
        return new Promise((res,rej)=>{
            if(fs.existsSync(dataPath)){
                const stream = fs.readFile(dataPath,"utf8",(err,data)=>{
                    res(JSON.parse(data));
                });
                res(stream);
            }else {
                res([]);
            }
        })
    }

    async saveData(){
        const stream = await ReadingSavingData.readingData();

        const katalogData = await{
            title: this.t,
            price:`${this.p} euro`,
            description: this.d,
            imgUrl: this.u
        }
        await stream.push(katalogData);
        console.log(stream);
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