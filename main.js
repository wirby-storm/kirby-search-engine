
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
let arr = ["mirr.jpeg", "cool.jpg"];
document.body.style.backgroundImage = `url(${arr[(Math.floor(Math.random() * arr.length))]})`;
