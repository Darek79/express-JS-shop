
const btn = document.querySelectorAll(".add");
const cN = document.querySelectorAll(".cartNr");
const cart = document.getElementById("cart");
const cartUp = document.getElementById("cartUpdate");

console.log(cN);

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
            cartUp.style.position = "fixed";
            cN.forEach((val)=>{
                val.innerHTML = resData.cartFiles.length;
            })
            animD();
            
        })


    });

cart.addEventListener("click", async() => {
    cartUp.style.position = "fixed";
    animD();

});

const animD =()=>{
    let clear;
    const tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    tl.add({
        targets: "#cartUpdate",
        top: "0",
        easing: "easeInOutCirc",
        endDelay: 1000,
        complete: (a)=>{
            if(a.completed){
                clear = setTimeout(()=>{
                    cartUp.style.position = "";
                    cartUp.style.top= "-22vh"
                },2000)
                
            }
        }
    })
    clearTimeout(clear);
}

