
const button = document.getElementById('dod')
const re = document.getElementById('q')
let input = document.getElementById('u').value
if (input == " "){
    input.textContent = "Slurby"
}
document.getElementById('u').onkeydown = function(event) {
input = document.getElementById('u').value
if (input == " "){
    input.textContent = "Slurby"
}
if (event.keyCode == 13 && input.length > 0) {
    if (input.toLowerCase() == "wirby maps"){
        window.open(`https://wirbymaps.pages.dev/`);
    } else{
          window.open(`https://wirbysearch.pages.dev/search?q=${input}`, "blank");
        window.close();
    }
}
}
function isMobileDevice() {
  // Check for touch support and user agent keywords
  const hasTouch = ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileUserAgent = /(android|webos|iphone|ipad|ipod|blackberry|windows phone)/i.test(userAgent);

  // Check screen width for smaller devices
  const screenWidth = window.screen.width;
  const isSmallScreen = screenWidth <= 768; // Adjust breakpoint as needed

  // Combine checks
  return hasTouch && (isMobileUserAgent || isSmallScreen);
}

// Example usage
if (isMobileDevice()) {
  console.log("User is on a mobile device.");
} else {
  console.log("User is not on a mobile device.");
}
function done(){
    window.open(`https://wirby.pages.dev/search/{}`);
}
let arr = ["mirr.jpeg", "cool.jpg", "send-me-your-best-kirby-wallpapers-v0-da9vnnehtvec1.webp", "kirby-halloween-wallpaper-artwork-suyasuyabi427-kawaii-hoshi-1382x1536.jpg","thumb-1920-1338821.png","thumbbig-1232060.webp","thumbbig-1232060.webp","thumbbig-1363285.webp", "send-me-your-best-kirby-wallpapers-v0-2tb0jhu84vec1.webp","asset.jpeg","jpeg.jpeg", "kirby6.jpeg", "kirbyforgoot.jpeg", "mirr2.jpeg","kirby0.jpeg", "robot.png", "wii.jpeg", "maxresdefault.jpg", "KirbySuperStar.jpeg", "max.jpeg", "air.png", "Blowout_Blast.png", "d.jpg", "snes.jpeg", "maxres.jpeg", "kirbydrame.jpeg", "DreamCollectionF.jpg", "bat.png", "maxresdefault.jpg" , 
"Nathaniel_Arc.png"];
document.body.style.backgroundImage = `url(${arr[(Math.floor(Math.random() * arr.length))]})`;
