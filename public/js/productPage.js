
const btn = document.querySelectorAll(".add");
const cN = document.getElementById("cartNr");
const cart = document.getElementById("cart");

let t, p, i,resData;


btn.forEach((val) => {
    val.addEventListener("click", async(e) => {

        e.preventDefault();
        t = val.getAttribute("data-title");
        p = val.getAttribute("data-price");
        i = val.getAttribute("data-img");
     
         const resp = await fetch("/addToCart",{
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
            resData = await resp.json();
            cN.innerHTML = resData.cartFiles.length;
            


        })


    });

cart.addEventListener("click", async() => {
    const resp = await fetch("/getCart");
    const resData = await resp.json();
    console.log(resData.cartJSON);
    
    resData.cartJSON.forEach((val)=>{
        console.log(val);
    })
});