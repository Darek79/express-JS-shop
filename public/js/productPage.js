const btn = document.querySelectorAll(".add");
let t,p;
let cnt = 0;
btn.forEach((val,i)=>{
val.addEventListener("click",(e)=>{
    cnt++;
    console.log(cnt);
    e.preventDefault();
     t = val.getAttribute("data-title");
     p = val.getAttribute("data-price");

     fetch("http://localhost:3000/addToCart",{
         method: "POST",
         body: JSON.stringify({
             t,
             p
         }),
         headers:{
             "Content-Type": "application/x-www-form-urlencoded"
         }
     });

})

})


