const sideW = document.getElementById("sidebarW");
const btn = document.querySelectorAll(".sCat");
const mainDiv = document.getElementById("topics");
const ham = document.getElementById("ham");
const clo = document.getElementById("clo");
const ul = document.getElementById("list");
const li = document.querySelectorAll(".liItem");


ham.addEventListener("click", async () => {
    const resData = await fetch("/sidebarData", {
        method: "POST",
        body: JSON.stringify({
            def: "def"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const resCat = await resData.json();
    const img = encodeURI(resCat.backImg);
    mainDiv.style.backgroundImage = `url(${img})`;

  

    resCat.links.forEach((val,i) => {

        let li = document.createElement("li");
        let span = document.createElement("span");
        li.textContent = val.title;
        li.className ="liItem";
        span.className = "ar";
        ul.appendChild(li);
        li.appendChild(span);
    })

    anime({
        targets: "#sidebarW",
        duration: 200,
        easing: "easeOutSine",
        translateX: "100vw"
    });
});


clo.addEventListener("click", () => {

    const liItem = document.querySelectorAll(".liItem");
    liItem.forEach((val, i) => {
         ul.removeChild(liItem[i])
    })

    anime({
        targets: "#sidebarW",
        duration: 200,
        easing: "easeOutQuad",
        translateX: "-100vw"
    });
});

btn.forEach((val) => {
    val.addEventListener("click", async (e) => {

        const cat = val.getAttribute("data-n");
        const resData = await fetch("/sidebarData", {
            method: "POST",
            body: JSON.stringify({
                cat
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const resCat = await resData.json();
        const img = encodeURI(resCat.backImg);
        mainDiv.style.backgroundImage = `url(${img})`;

        const liItem = document.querySelectorAll(".liItem");
        console.log(liItem[0].parentElement);

        resCat.links.forEach((val, i) => {
            // console.log(liItem[i]);

            ul.removeChild(liItem[i])

            let li = document.createElement("li");
            let span = document.createElement("span");
            li.textContent = val.title;
            li.className ="liItem";
            span.className = "ar";
            ul.appendChild(li);
            li.appendChild(span);
        })
    })
})


// ul.removeChild(liItem[i])

// let li = document.createElement("li");
// li.textContent = val.title;
// li.className ="liItem";
// ul.appendChild(li);