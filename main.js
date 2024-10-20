
const button = document.getElementById('dod')
const re = document.getElementById('q')

  const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const appVersion = navigator.appVersion;
    const hardwareConcurrency = navigator.hardwareConcurrency;
      const deviceMemory = navigator.deviceMemory;




document.getElementById('u').onkeydown = function(event) {
    const input = document.getElementById('u').value
    if (event.keyCode == 13 && input.length > 0) {
        if (input.toLowerCase() == "wirby maps"){
            window.open(`https://wirbymaps.pages.dev/`);
        } else{

            
            
           window.open(`https://wikirby.com/wiki/${input}`);
        }
    }
}
function done(){
    window.open(`https://wirby.pages.dev/`);
}
let arr = ["mirr.jpeg", "asset.jpeg","jpeg.jpeg", "kirby6.jpeg", "kirbyforgoot.jpeg", "mirr2.jpeg","kirby0.jpeg", "robot.png", "wii.jpeg", "maxresdefault.jpg", "KirbySuperStar.jpeg", "max.jpeg", "air.png", "Blowout_Blast.png", "d.jpg", "snes.jpeg", "maxres.jpeg", "kirbydrame.jpeg", "DreamCollectionF.jpg", "bat.png"];
document.body.style.backgroundImage = `url(${arr[(Math.floor(Math.random() * arr.length))]})`;
