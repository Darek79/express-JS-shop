const alp = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

let word = [];
  const getIndex=(strg,alph)=>{

    const word = strg.split("");
    let arr=[];
     for(let i=0;i<word.length;i++){
       for(let y=0;y<alph.length;y++){
        if(word[i]===alph[y]){
         arr.push([y+1,y+2,y+3,y+4].reverse());
        } 
       }
     }  
    return arr;
  }

 let a = getIndex("abc",alp);  

const propperIndex=(arr)=>{

  for (let i =0;i<arr.length;i++){
    for(let y=0;y<arr[i].length;y++){
      if(arr[i][y]>25){
        arr[i][y] = arr[i][y]-26;
      }
    }
  }
}
propperIndex(a);

const getWord=(ar)=>{
  let arr = ar;
  console.log(arr);

    for(let i=0;i<arr.length;i++){
      for(let y=0;y<arr[i].length;y++){
        for(let x=0;x<alp.length;x++){
          if(arr[i][y]===x){
            arr[i][y]=alp[x];
          }
        }
      }
    }

    return word = arr;

}

getWord(a);
console.log(word);

// [ [ 24, 25, 0, 1 ], [ 25, 0, 1, 2 ], [ 0, 1, 2, 3 ] ] 

//   const getIndex=(strg,alph)=>{

//     const word = strg.split("");
//     let arr=[];
//      for(let i=0;i<word.length;i++){
//        for(let y=0;y<alph.length;y++){
//         if(word[i]===alph[y]){
//          arr.push(y+1,y+2,y+3,y+4);
//         } 
//        }
//       }
//     return arr;
//   }

//  let a = getIndex("dogan",alp);  

// const propperIndex=(arr)=>{

//   for (let i =0;i<arr.length;i++){
//     for(let y=0;y<arr[i].length;y++){
//       if(arr[i][y]>25){
//         arr[i][y] = arr[i][y]-26;
//       }
//     }
//   }
// }
// propperIndex(a);

// const getWord=(ar)=>{
//   let arr = ar;

//   alp.forEach((val,i)=>{
//     if(i === arr[i]){
//       arr[i] = val;
//     }
//     console.log(arr)
//   })


// }

// getWord(a);
// console.log(a);

