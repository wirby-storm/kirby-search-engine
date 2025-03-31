
const button = document.getElementById('dod')
const re = document.getElementById('q')
document.getElementById('u').onkeydown = function(event) {
const input = document.getElementById('u').value
if (event.keyCode == 13 && input.length > 0) {
    if (input.toLowerCase() == "wirby maps"){
        window.open(`https://wirbymaps.pages.dev/`);
    } else{
        var a = document.createElement('a');
        var linkText = document.createTextNode("my title text");
        a.appendChild(linkText);
        a.title = "Wikirby";
        a.href = `https://wikirby.com/wiki/${input}`;
        document.body.appendChild(a);
           window.open(`https://wikirby.com/wiki/${input}`);
    }
}
}
function done(){
    window.open(`https://wirby.pages.dev/`);
}
let arr = ["mirr.jpeg", "cool.jpg", "send-me-your-best-kirby-wallpapers-v0-da9vnnehtvec1.webp", "kirby-halloween-wallpaper-artwork-suyasuyabi427-kawaii-hoshi-1382x1536.jpg","thumb-1920-1338821.png","thumbbig-1232060.webp","thumbbig-1232060.webp","thumbbig-1363285.webp", "send-me-your-best-kirby-wallpapers-v0-2tb0jhu84vec1.webp","asset.jpeg","jpeg.jpeg", "kirby6.jpeg", "kirbyforgoot.jpeg", "mirr2.jpeg","kirby0.jpeg", "robot.png", "wii.jpeg", "maxresdefault.jpg", "KirbySuperStar.jpeg", "max.jpeg", "air.png", "Blowout_Blast.png", "d.jpg", "snes.jpeg", "maxres.jpeg", "kirbydrame.jpeg", "DreamCollectionF.jpg", "bat.png", "maxresdefault.jpg" , 
"Nathaniel_Arc.png"];
document.body.style.backgroundImage = `url(${arr[(Math.floor(Math.random() * arr.length))]})`;
