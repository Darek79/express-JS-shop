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


// let arr = [ { t: 'GEO FLIPPY DRESS',
//     p: '124.99',
//     i: '\\img\\9db22a66b0294_1559674581418',
//     d: '2019-06-27T20:35:13.302Z' },
//   { t: 'Sonnenbrille - blackftrends',
//     p: '194.95',
//     i: '\\img\\A1.jpeg_1559672456566',
//     d: '2019-06-28T17:41:24.050Z' } ];

// arr.forEach((val)=>{
//     console.log(val.t);
// })

let obj = [{
  "damen": [{
      "backImg": "\\imgSide\\women-s2.jpg"
  },{
      "links": [{
              "title": "get the look"
          },
          {
              "title": "neu"
          },
          {
              "title": "bekleidung"
          },
          {
              "title": "schuche"
          },
          {
              "title": "sport"
          },
          {
              "title": "accessoires"
          },
          {
              "title": "beauty"
          },
          {
              "title": "premium"
          },
          {
              "title": "marken"
          },
          {
              "title": "sale %"
          }
      ]
    }],
  "herren": [{
      "backImg": "\\imgSide\\men-s2.jpg"
  },{
      "links": [{
              "title": "get the look"
          },
          {
              "title": "neu"
          },
          {
              "title": "bekleidung"
          },
          {
              "title": "schuche"
          },
          {
              "title": "sport"
          },
          {
              "title": "accessoires"
          },
          {
              "title": "pflege"
          },
          {
              "title": "premium"
          },
          {
              "title": "marken"
          },
          {
              "title": "sale %"
          }
      ]
    }],

  "kinder": [{
      "backImg": "\\imgSide\\kids-s2.jpg"
    },{
      "links": [{
              "title": "inspiration"
          },
          {
              "title": "bekleidung"
          },
          {
              "title": "schuche"
          },
          {
              "title": "sport"
          },
          {
              "title": "accessoires"
          },
          {
              "title": "wäsche"
          },
          {
              "title": "premium"
          },
          {
              "title": "marken"
          },
          {
              "title": "sale %"
          }
      ]
  }]
}]


// const obj = [{
//   "_id": {
//     "$oid": "5968dd23fc13ae04d9000001"
//   },
//   "product_name": "sildenafil citrate",
//   "supplier": "Wisozk Inc",
//   "quantity": 261,
//   "unit_cost": "$10.47"
// }, {
//   "_id": {
//     "$oid": "5968dd23fc13ae04d9000002"
//   },
//   "product_name": "Mountain Juniperus ashei",
//   "supplier": "Keebler-Hilpert",
//   "quantity": 292,
//   "unit_cost": "$8.74"
// }, {
//   "_id": {
//     "$oid": "5968dd23fc13ae04d9000003"
//   },
//   "product_name": "Dextromathorphan HBr",
//   "supplier": "Schmitt-Weissnat",
//   "quantity": 211,
//   "unit_cost": "$20.53"
// }]

// let obj = [ { damen: { backImg: '\\imgSide\\women-s2.jpg', links: [Array] } },
// { herren: { backImg: '\\imgSide\\men-s2.jpg', links: [Array] } },
// { kinder: { backImg: '\\imgSide\\men-s2.jpg', links: [Array] } } ]

const[{damen}] = obj;
console.log(damen);