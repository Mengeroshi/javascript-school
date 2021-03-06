import MediaPlayer from "../MediaPlayer";


class AutoPause{
    private threshold:number
    player: MediaPlayer
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player: MediaPlayer){
        this.player = player;
        const obsever = new IntersectionObserver(this.handleIntersection,{
        threshold: this.threshold   
        })

        obsever.observe(this.player.media);
        document.addEventListener('visibilitychange', this.handleVisibilityChange )
    }

    private handleIntersection(entries:IntersectionObserverEntry[]){
        const entry = entries[0];
        //console.log(entry)

        const isVisible = entry.intersectionRatio >= this.threshold

        isVisible?  this.player.play(): this.player.pause();
        
    }

    private handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible";

        isVisible? this.player.play() : this.player.pause();
        //console.log(isVisible)
        
    }

}

export default AutoPause;