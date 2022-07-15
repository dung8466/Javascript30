//call analogClock, digitalClock every 1s
setInterval(analogClock,1000);
setInterval(digitalClock,1000);

//Analog Clock
const hour = document.querySelector('[data-hour]');
const min = document.querySelector('[data-min]');
const sec = document.querySelector('[data-sec]');

let getSec,getMin,getHour;

function analogClock(){
    const date = new Date();
    getSec = date.getSeconds()/60;
    getMin = date.getMinutes()/60;
    getHour = date.getHours()/12;
    setRotation(sec,getSec);
    setRotation(min,getMin);
    setRotation(hour,getHour);
}

function setRotation(element, ratio){
    element.style.setProperty('--rotation',ratio*360);
}

//Digital Clock
function digitalClock(){
    document.querySelector('#digitalClock').innerHTML = display(getHour*12) + ":" + display(getMin*60) + ":" +display(getSec*60);
}
function display(element){
    if(element < 10){
        element = "0" + element;
    }
    return element;
}
