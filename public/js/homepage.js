
(()=>{
const catWrapper = document.getElementById("catWrapper");
const txt = document.querySelector(".cText");
const carusselImg = document.getElementById("carusselImg");
const w = window.innerWidth;

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



