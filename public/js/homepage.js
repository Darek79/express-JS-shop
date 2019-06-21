
const catWrapper = document.getElementById('carusselImg');
const imgList = document.querySelectorAll(".cImg");
let clientXArr = []
const screenW = window.innerWidth;
let move = 0;
window.addEventListener('touchstart', s);
window.addEventListener('touchend', e);
catWrapper.addEventListener('touchmove', m);

// document.body.addEventListener('click', () => {
//     console.log("click here");
//     // imgList.forEach((val)=>{
//     //     val.style.transform = `translateX(${-screenW}px)`
//     //     })
//     move +=screenW;
//     anime({
//         targets: catWrapper,
//         translateX: -move
//     });
//     catWrapper.style.backgroundColor = `black`;
// });

let start;

function s(ev) {
    console.log(ev.type);
    clientXArr = [];
    if (ev.type === "touchstart") {
        start = true;
        console.log("copierd");
        // console.log(ev.touches[0].clientX);
        clientXArr.push(ev.touches[0].clientX);
    }
}



function m(ev) {
    // console.log(ev.targetTouches[0].clientX);
    clientXArr.push(ev.targetTouches[0].clientX);
    // console.log(clientXArr[0], clientXArr[3]);
    // console.log(clientXArr);
    console.log(ev.type);


    if (clientXArr[0] < clientXArr[2] && start === true) {
        start = false;
        console.log("bigger");
        // move += screenW;
        move += screenW;
        console.log(move);
        anime({
            targets: catWrapper,
            translateX: -move
        });
        clientXArr = [];
    }

    if (clientXArr[0] > clientXArr[2] && start === true) {
        start = false;
        console.log("smaller");
        // move += screenW;
        move -= screenW;
        console.log(move);
        anime({
            targets: catWrapper,
            translateX: -move
        });
        clientXArr = [];
    }

}

function e(ev) {
    console.log(ev.type);
    console.log(ev.targetTouches);
    // if(ev.targetTouches[0].target.classList[0] === "cImg" ){
    //     console.log(ev.touches[0].clientX);
    // }
}