
const button = document.getElementById('dod')
const re = document.getElementById('q')
document.getElementById('u').onkeydown = function(event) {
    const input = document.getElementById('u').value
    if (event.keyCode == 13 && input.length > 0) {
        if (input.toLowerCase() == "wirby maps"){
            window.open(`https://wirbymaps.pages.dev/`);
        } else{
            function getDeviceInformation() {
              const userAgent = navigator.userAgent;
              const platform = navigator.platform;
              const appVersion = navigator.appVersion;
              const hardwareConcurrency = navigator.hardwareConcurrency;
              const deviceMemory = navigator.deviceMemory;
            
              // Parse user agent using a library or regular expressions
              const parsedUserAgent = parseUserAgent(userAgent); // Assuming a parsing function
            
              console.log("Device Information:");
              console.log("User Agent:", userAgent);
              console.log("Platform:", platform);
              console.log("App Version:", appVersion);
              console.log("Hardware Concurrency:", hardwareConcurrency);
              console.log("Device Memory:", deviceMemory);
              console.log("Parsed User Agent:", parsedUserAgent);
            }
            
            getDeviceInformation();
           window.open(`https://wikirby.com/wiki/${input}`);
        }
    }
}
function done(){
    window.open(`https://wirby.pages.dev/`);
}
let arr = ["mirr.jpeg", "asset.jpeg","jpeg.jpeg", "kirby6.jpeg", "kirbyforgoot.jpeg", "mirr2.jpeg","kirby0.jpeg", "robot.png", "wii.jpeg", "maxresdefault.jpg", "KirbySuperStar.jpeg", "max.jpeg", "air.png", "Blowout_Blast.png", "d.jpg", "snes.jpeg", "maxres.jpeg", "kirbydrame.jpeg", "DreamCollectionF.jpg", "bat.png"];
document.body.style.backgroundImage = `url(${arr[(Math.floor(Math.random() * arr.length))]})`;
