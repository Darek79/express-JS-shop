
const cText = document.querySelector('.cText');
const imgList = document.querySelector("#carusselImg");
let clientXArr = []
const screenW = window.innerWidth;
let move = 0;
// console.log(window.innerWidth);
// window.addEventListener('resize',()=>{
//     let x = window.innerWidth;
//     let y = window.innerHeight;
// })
console.log(cText);
// console.log(imgList);
let x, y;

// window.addEventListener('touchstart', s);
// window.addEventListener('touchend', e);
// window.addEventListener('touchmove', m);

let start;

class TouchMove {
    constructor(...el) {
        this.wX = window.innerWidth;
        this.el = el;
        this.t = "";
    }
    touchstart() {
        window.addEventListener("touchstart", (ev) => {
            this.startX = parseInt(ev.touches[0].clientX);
            this.startY = parseInt(ev.touches[0].clientY);
            const searchEl = ev.touches[0].target.offsetParent;
            console.log(ev.target.attributes[0].value);
            console.log(ev.touches[0].target.parentElement);
            console.log(ev.touches[0]);
            // console.log(ev.target.getAttribute("id"));
            this.el.forEach((val) => {
        

                if (this.idOrClass(searchEl) === val.attributes[0].value) {
                    console.log("found");
                    this.t = ev.target;
                }
            });
        })

    }

    idOrClass(elt){
        let x = elt.getAttribute("id") !== null?elt.getAttribute("id"):elt.getAttribute("class");
        console.log(x);
      return x 
    }
    //need to write cb function to check if id or class




    touchmove() {
        window.addEventListener("touchmove", (ev) => {
            this.distX = parseInt(ev.touches[0].clientX) - this.startX;
            this.distY = parseInt(ev.touches[0].clientY) - this.startY;



            // anime({
            //     targets: this.t,
            //     translateX: -this.wX
            // });
            // console.log();


        })
    }

}

const c = new TouchMove(imgList, cText);
c.touchstart()
c.touchmove();


// function s(ev) {
//     console.log(ev.type,ev.target);
//     clientXArr = [];

//         start = true;
//         console.log("copierd");
//         // console.log(ev.touches[0].clientX);
//         x=ev.touches[0].clientX;
//         y=ev.touches[0].clientY;
//         console.log(x,y)

// }



// function m(ev) {
//     // console.log(ev.targetTouches[0]);
//     clientXArr.push(ev.targetTouches[0].clientX);
//     // console.log(clientXArr[0], clientXArr[3]);
//     // console.log(clientXArr);
//     console.log(ev.type);


//     if (clientXArr[0] < clientXArr[2] && start === true) {
//         start = false;
//         console.log("bigger");
//         // move += screenW;
//         move += screenW;
//         console.log(move);
//         anime({
//             targets: catWrapper,
//             translateX: -move
//         });
//         clientXArr = [];
//     }

//     if (clientXArr[0] > clientXArr[2] && start === true) {
//         start = false;
//         console.log("smaller");
//         // move += screenW;
//         move -= screenW;
//         console.log(move);
//         anime({
//             targets: catWrapper,
//             translateX: -move
//         });
//         clientXArr = [];
//     }

// }

// function e(ev) {
//     console.log(ev.type);
//     console.log(ev.targetTouches);
//     // if(ev.targetTouches[0].target.classList[0] === "cImg" ){
//     //     console.log(ev.touches[0].clientX);
//     // }
// }





// const catWrapper = document.getElementById('carusselImg');
// const imgList = document.querySelectorAll(".cImg");
// let clientXArr = []
// const screenW = window.innerWidth;
// let move = 0;
// window.addEventListener('touchstart', s);
// window.addEventListener('touchend', e);
// window.addEventListener('touchmove', m);

// let start;

// function s(ev) {
//     console.log(ev.type);
//     clientXArr = [];
//     if (ev.type === "touchstart") {
//         start = true;
//         console.log("copierd");
//         // console.log(ev.touches[0].clientX);
//         clientXArr.push(ev.touches[0].clientX);
//     }
// }



// function m(ev) {
//     console.log(ev.targetTouches[0]);
//     clientXArr.push(ev.targetTouches[0].clientX);
//     // console.log(clientXArr[0], clientXArr[3]);
//     // console.log(clientXArr);
//     console.log(ev.type);


//     if (clientXArr[0] < clientXArr[2] && start === true) {
//         start = false;
//         console.log("bigger");
//         // move += screenW;
//         move += screenW;
//         console.log(move);
//         anime({
//             targets: catWrapper,
//             translateX: -move
//         });
//         clientXArr = [];
//     }

//     if (clientXArr[0] > clientXArr[2] && start === true) {
//         start = false;
//         console.log("smaller");
//         // move += screenW;
//         move -= screenW;
//         console.log(move);
//         anime({
//             targets: catWrapper,
//             translateX: -move
//         });
//         clientXArr = [];
//     }

// }

// function e(ev) {
//     console.log(ev.type);
//     console.log(ev.targetTouches);
//     // if(ev.targetTouches[0].target.classList[0] === "cImg" ){
//     //     console.log(ev.touches[0].clientX);
//     // }
// }