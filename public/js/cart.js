const trash = document.querySelectorAll(".trash");
const cN = document.querySelectorAll(".cartNr");
const s = document.querySelector("#tot p:nth-child(2)");

let resData,dI;

trash.forEach((val)=>{
    val.addEventListener("click",async(e)=>{

         dI = val.getAttribute("data-t");

       const resp = await fetch("/deleteItem",{
            method: "POST",
            body: JSON.stringify({
                dI
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        resData = await resp.json();
       
        cN.forEach((val)=>{
            val.innerHTML = resData.cartF.length;
            s.innerHTML = `${resData.totalS.replace(".",",")} &#8364`;
        })
        const rN = e.target.parentElement.parentElement;
        rN.parentNode.removeChild(rN);

    })
})


