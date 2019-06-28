
let s = "adarek";


const checkStr =(str)=>{
    const arr = str.split("");
    for(let i=0;i<arr.length;i++){
        for(let y=i+1;y<arr.length;y++){
            if(arr[i]===arr[y]){
                console.log(arr[i]);
                return arr[i];
            }
        }
    }

}

console.log(checkStr(s));
