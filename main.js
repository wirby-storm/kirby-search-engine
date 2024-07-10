
const button = document.getElementById('dod')
const re = document.getElementById('q')

function dodo (){
  const input = document.getElementById('u').value
  if (input = "wirby maps"){
    window.open(``);
  }
  else{
  
    window.open(`https://www.google.com/search?q=${input}`);
  }
}
let arr = ["mirr.jpeg", "asset.jpeg","jpeg.jpeg", "kirby6.jpeg", "kirbyforgoot.jpeg", "mirr2.jpeg","kirby0.jpeg", "robot.png", "wii.jpeg", "maxresdefault.jpg", "KirbySuperStar.jpeg", "max.jpeg", "air.png", "Blowout_Blast.png", "d.jpg", "snes.jpeg", "maxres.jpeg", "kirbydrame.jpeg", "DreamCollectionF.jpg", "bat.png"];
document.body.style.backgroundImage = `url(${arr[(Math.floor(Math.random() * arr.length))]})`;
