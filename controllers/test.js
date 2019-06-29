
// let s = "adarek";


// const checkStr =(str)=>{
//     const arr = str.split("");
//     for(let i=0;i<arr.length;i++){
//         for(let y=i+1;y<arr.length;y++){
//             if(arr[i]===arr[y]){
//                 console.log(arr[i]);
//                 return arr[i];
//             }
//         }
//     }

// }

// console.log(checkStr(s));

let arr =[ { t: 'Sonnenbrille - blackftrends',
    p: '194.95',
    i: '\\img\\A2.webp_1559672456567',
    u: '/prodPageC/von%20hoardoeg_155967245/0',
    d: '2019-06-28T19:54:06.973Z' },
  { t: 'COCO - Blazer - Coat',
    p: '79.99',
    i: '\\img\\B2.webp_1559675010807',
    u: '/prodPageC/von%20Styled%20by%20Zalandobp_155967501/2',
    d: '2019-06-28T20:11:13.257Z' },
  { t: 'Freizeitkleid',
    p: '36.99',
    i: '\\img\\F4.jfif_1559754484956',
    u: '/prodPageC/von%20Styled%20by%20Zalandoeg_155975448/3',
    d: '2019-06-28T20:19:57.052Z' } ]

 const nArr = arr.filter((val,i)=>{
     if(i !== 2){
        return val
     }
     
 })   
 console.log(nArr);

