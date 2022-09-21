const vibrateButton = document.getElementById("vibrate");
const vibratePatternButton = document.getElementById("vibrate-pattern");

vibrateButton.addEventListener("click",()=>{
    navigator.vibrate(200); // vibrate for 200ms
})

vibratePatternButton.addEventListener("click",()=>{
    navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]) //vibrate super mario theme in morse
})