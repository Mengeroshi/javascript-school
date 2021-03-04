class AutoPause{
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player){
        this.player = player;
        const obsever = new IntersectionObserver(this.handleIntersection,{
        threshold: this.threshold   
        })

        obsever.observe(this.player.media);
        document.addEventListener('visibilitychange', this.handleVisibilityChange )
    }

    handleIntersection(entries){
        const entry = entries[0];
        //console.log(entry)

        const isVisible = entry.intersectionRatio >= this.threshold

        isVisible?  this.player.play(): this.player.pause();
        
    }

    handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible";

        isVisible? this.player.play() : this.player.pause();
        console.log(isVisible)
        
    }

}

export default AutoPause;