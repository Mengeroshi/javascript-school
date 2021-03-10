import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './adds';

class AdsPlugin{
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private addsContainer: HTMLElement;

    constructor(){
        this.ads = Ads.getInstance();
        this.addsContainer = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    }

    run(player:MediaPlayer){
        this.player = player;
        this.player.container.appendChild(this.addsContainer)
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate)
    }

    private handleTimeUpdate(){
     const currenTime =   Math.floor(this.media.currentTime);

     if(currenTime % 30 === 0){
         this.renderAd();
     }
    }

    private renderAd(){
        if(this.currentAd){
            return;
        }
        const ad = this.ads.getAd()
        this.currentAd = ad;
        this.addsContainer.innerHTML = ` 
            <div class="ads">
            <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
                <img class="ads__img" src="${this.currentAd.imageUrl}" />
                <div class="ads__info">
                <h5 class="ads__title">${this.currentAd.title}</h5>
                <p class="ads__body">${this.currentAd.body}</p>
                </div>
            </a>
            </div>
        `;
    
    setTimeout(()=>{
        this.currentAd = null;
        this.addsContainer.innerHTML = '';
    },10000)
    }
}

export default AdsPlugin;