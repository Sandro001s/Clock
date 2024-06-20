let button = document.querySelector(".darkmode");
let circle = document.querySelector(".circle");
let body = document.querySelector("body");
const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

button.addEventListener("click", function(){
    circle.classList.toggle("whitebg");
    circle.classList.toggle("boxshadowcircle");
});

button.addEventListener("click", function (){
    body.classList.toggle("blackbg");
    button.classList.toggle("whitebg");
});

const updateTime = () => {
    let date = new Date();
    let seconds = date.getSeconds() / 60;
    let minutes = (seconds + date.getMinutes()) /60;
    let hours = (minutes+ date.getHours()) / 12;
    
    
    rotateclockHand(secondHand, seconds);
    rotateclockHand(minuteHand, minutes);
    rotateclockHand(hourHand, hours);
}

function rotateclockHand(element, rotation){
    element.style.setProperty(`--rotate`, rotation * 360);
}
setInterval(updateTime,1000);

updateTime();