const urlParams = new URLSearchParams(window.location.search);
const input = urlParams.get('q'); // Replace 'paramName' with the actual parameter you want
link("http://www.kirbysrainbowresort.net/", "Kirby's Rainbow Resort", input)
link("https://kirby.webnwork.com/en/", "Kirbytraum", input)
link("https://wikirby.com/wiki/", "Wikirby", input)
link("https://www.kirbyinformer.com/", "Kirby Informer", input)
link("https://kirby.fandom.com/wiki/", "Kirby Fandom", input)
link("https://kirby.nintendo.com/", "The Official Home of Kirby™", input)
link("https://www.kirby.jp/", "Kirby Portal", input)
let arr = ["mirr.jpeg", "cool.jpg", "send-me-your-best-kirby-wallpapers-v0-da9vnnehtvec1.webp", "kirby-halloween-wallpaper-artwork-suyasuyabi427-kawaii-hoshi-1382x1536.jpg","thumb-1920-1338821.png","thumbbig-1232060.webp","thumbbig-1232060.webp","thumbbig-1363285.webp", "send-me-your-best-kirby-wallpapers-v0-2tb0jhu84vec1.webp","asset.jpeg","jpeg.jpeg", "kirby6.jpeg", "kirbyforgoot.jpeg", "mirr2.jpeg","kirby0.jpeg", "robot.png", "wii.jpeg", "maxresdefault.jpg", "KirbySuperStar.jpeg", "max.jpeg", "air.png", "Blowout_Blast.png", "d.jpg", "snes.jpeg", "maxres.jpeg", "kirbydrame.jpeg", "DreamCollectionF.jpg", "bat.png", "maxresdefault.jpg" , 
"Nathaniel_Arc.png"];
document.body.style.backgroundImage = `url(${arr[(Math.floor(Math.random() * arr.length))]})`;
function link(link, name, input) {
        var a = document.createElement('a');
        var linkText = document.createTextNode(name);
        a.appendChild(linkText);
        a.href = `${link}${input}`;
        a.target = "blank"
        document.body.appendChild(a);
}
