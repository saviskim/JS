// светофор

const trafficLightEl = document.querySelector('#trafficLight');
function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}
function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLightEl.style.background = ('Red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}
trafficLightEl.addEventListener('click', makeGreen);

//Мод

const trafficLightMod = document.querySelector('#trafficLightMod');
const trafficLightG = document.querySelector('#trafficLightG');
const trafficLightY = document.querySelector('#trafficLightY');
const trafficLightR = document.querySelector('#trafficLightR');

function makeGreenMod() {
    trafficLightG.style.background = ('green');
    trafficLightY.style.background = ('black');
    trafficLightR.style.background = ('black');
    trafficLightMod.removeEventListener('click', makeGreenMod);
    trafficLightMod.addEventListener('click', makeYellowMod);
}
function makeYellowMod() {
    trafficLightY.style.background = ('yellow');
    trafficLightG.style.background = ('black');
    trafficLightR.style.background = ('black');
    trafficLightMod.removeEventListener('click', makeYellowMod);
    trafficLightMod.addEventListener('click', makeRedMod);
}
function makeRedMod() {
    trafficLightR.style.background = ('red');
    trafficLightG.style.background = ('black');
    trafficLightY.style.background = ('black');
    trafficLightMod.removeEventListener('click', makeRedMod);
    trafficLightMod.addEventListener('click', makeGreenMod);
}
trafficLightMod.addEventListener('click', makeGreenMod);