const btn = document.querySelectorAll(".sCat");
const mainDiv = document.getElementById("topics");
const ham = document.getElementById("ham");
console.log(btn);

ham.addEventListener("click",async()=>{
    const resData = await fetch("/sidebarData",{
        method : "POST",
        body: JSON.stringify({
            def: "def"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const resCat = await resData.json();
    console.log(resCat);
    const img = encodeURI(resCat.dataItem[0].backImg);
    mainDiv.style.backgroundImage = `url(${img})`
    
})


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
        console.log(resCat);
        const img = encodeURI(resCat.dataItem[0].backImg);
        mainDiv.style.backgroundImage = `url(${img})`


    })
})