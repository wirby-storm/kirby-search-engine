
const button = document.getElementById('dod')
const re = document.getElementById('q')
document.getElementById('u').onkeydown = function(event) {
    const input = document.getElementById('u').value
    if (event.keyCode == 13 && input.length > 0) {
        if (input.toLowerCase() == "wirby maps"){
            window.open(`https://wirbymaps.pages.dev/`);
        } else if (input.toLowerCase().includes(' ') || !input.toLowerCase().include('.')) {
           window.open(`https://www.google.com/search?q=${input}`);
        } else {
            window.open(`https://${input}`);
        }
    }
}
function done(){
    window.open(`https://wirby.pages.dev/`);
}
let arr = ["mirr.jpeg", "asset.jpeg","jpeg.jpeg", "kirby6.jpeg", "kirbyforgoot.jpeg", "mirr2.jpeg","kirby0.jpeg", "robot.png", "wii.jpeg", "maxresdefault.jpg", "KirbySuperStar.jpeg", "max.jpeg", "air.png", "Blowout_Blast.png", "d.jpg", "snes.jpeg", "maxres.jpeg", "kirbydrame.jpeg", "DreamCollectionF.jpg", "bat.png"];
document.body.style.backgroundImage = `url(${arr[(Math.floor(Math.random() * arr.length))]})`;
