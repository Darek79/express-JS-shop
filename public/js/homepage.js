
(()=>{
const catWrapper = document.getElementById("catWrapper");
const txt = document.querySelector(".cText");
const carusselImg = document.getElementById("carusselImg");
const cart = document.getElementById("cart");
const cartUp = document.getElementById("cartUpdate");
const w = window.innerWidth;


cart.addEventListener("click", async() => {
    // const resp = await fetch("/getCart");
    // const resData = await resp.json();
    // console.log(resData.cartJSON);
    
    // resData.cartJSON.forEach((val)=>{
    //     console.log(val);
    // })
    cartUp.style.position = "fixed";
    cartUp.style.zIndex = "5";
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
                    cartUp.style.zIndex = "";
                },2000)
                
            }
        }
    })
    clearTimeout(clear);
}



class TouchMove {
    constructor(wX,el,sw,sl,slW) {
        this.wX = wX;
        this.el = el;
        this.swiper = sw;
        this.limitEl = sl;
        this.slWidth = slW;
        this.swipeD = 0;
        this.maxScroll = (this.el.children.length-1)*parseInt(window.getComputedStyle(this.limitEl).getPropertyValue("width"));
    }
    touchstart() {
        this.maxScroll = this.maxScroll / this.slWidth;

        this.el.addEventListener("touchstart", (ev) => {
            this.startX = parseInt(ev.touches[0].clientX);
            this.startY = parseInt(ev.touches[0].clientY);
            this.start = true;
            
            console.log(this.maxScroll); 
        })
        
    }

    touchmove() {
        this.el.addEventListener("touchmove", (ev) => {
            ev.stopPropagation();
            this.distX = parseInt(ev.touches[0].clientX) - this.startX;
            this.distY = parseInt(ev.touches[0].clientY) - this.startY;

            this.h = Math.abs(this.distX);
            this.v = Math.abs(this.distY);
            

            if (ev.touches.length === 1 && this.h > this.v && this.start===true) {

                this.act = this.swipeD

                this.x = this.distX <0?this.x = this.swipeD-=(this.wX/this.swiper):this.x = this.swipeD+=(this.wX/this.swiper);
                if(this.swipeD <= 0 && this.swipeD >= -this.maxScroll ){
                    anime({
                        targets: this.el,
                        translateX: this.x,
                        easing: 'easeOutBack' 
                    });
                } else {
                    this.swipeD = this.act;
                }
                
                this.start = false;
            }

        })
    }

}

const carusselImgSwiper = new TouchMove(w,carusselImg,1,carusselImg,1);
const catWrapperSwipper = new TouchMove(w/2,catWrapper,2,txt,4);
catWrapperSwipper.touchstart();
catWrapperSwipper.touchmove();
carusselImgSwiper.touchstart()
carusselImgSwiper.touchmove();

})();



