const btn = document.querySelectorAll(".sCat");
const mainDiv = document.getElementById("topics");
console.log(btn);

btn.forEach((val)=>{
    val.addEventListener("click",async(e)=>{

        const cat = val.getAttribute("data-n");
        const resData = await fetch("/sidebarData",{
            method : "POST",
            body: JSON.stringify({
                cat
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const resCat = await resData.json();
        const img = encodeURI(resCat.dataItem[0].backImg);
        mainDiv.style.backgroundImage = `url(${img})`

        
    })
})