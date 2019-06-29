const prodWrapper = document.querySelectorAll(".prodWrapper");
const trash = document.querySelectorAll(".trash svg");
const cN = document.querySelectorAll(".cartNr");

let resData,dI;

trash.forEach((val)=>{
    val.addEventListener("click",async(e)=>{

         dI = val.getAttribute("data-i");

       const resp = await fetch("/deleteItem",{
            method: "POST",
            body: JSON.stringify({
                dI
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        resData = await resp.json();
        cN.forEach((val)=>{
            val.innerHTML = resData.cartFiles.length;
        })
    })
})


