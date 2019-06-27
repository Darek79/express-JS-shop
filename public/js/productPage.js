const btn = document.querySelectorAll(".add");
const cN = document.getElementById("cartNr");
const cart = document.getElementById("cart");

let t,p,i;
let res;

btn.forEach((val)=>{
val.addEventListener("click",(e)=>{

    e.preventDefault();
     t = val.getAttribute("data-title");
     p = val.getAttribute("data-price");
     i = val.getAttribute("data-img");

     fetch("/addToCart",{
         method: "POST",
         body: JSON.stringify({
             t,
             p,
             i
         }),
         headers:{
             "Content-Type": "application/json"
         }
     })
     .then(res => res.json())
     .then((resData) => {
        cN.innerHTML = resData.cartFiles.length; 
        res = Promise.resolve(resData.cartFiles);
        })
     .catch(err => console.log(err));

})

});

cart.addEventListener("click",()=>{
    console.log(res);
});
