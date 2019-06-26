const btn = document.querySelectorAll(".add");
let t,p,i;
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
     });

})

})


