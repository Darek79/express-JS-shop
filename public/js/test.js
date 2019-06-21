// const alp = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z"
//   ];

//   const getIndex=(strg,alph)=>{

//     const word = strg.split("");
//     let arr=[];
//      for(let i=0;i<word.length;i++){
//        for(let y=0;y<alph.length;y++){
//         if(word[i]===alph[y]){
//          arr.push([y+1,y+2,y+3,y+4].reverse());
//         } 
//        }
//      }  
//     return arr;
//   }

//  let a = getIndex("abc",alp);  

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

//     for(let i=0;i<arr.length;i++){
//       for(let y=0;y<arr[i].length;y++){
//         for(let x=0;x<alp.length;x++){
//           if(arr[i][y]===x){
//             arr[i][y]=alp[x];
//           }
//         }
//       }
//     }

//     return arr;

// }

// getWord(a);
// console.log(word);


