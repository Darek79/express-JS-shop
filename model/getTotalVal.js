
exports.totalVal=(arr)=>{
    const n = [];
    arr.forEach((val)=>{
        if(val.p){
            n.push(parseFloat(val.p));
        }
    });
    let t = n.reduce((a,b)=>{
        return a+b;
    });
    const totalS = t < 100?t.toPrecision(4):t.toPrecision(5);

    return totalS;
}
