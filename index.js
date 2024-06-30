/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

document.getElementById("btn").addEventListener("click",function convert() {
    const inputVal = document.getElementById("input").value;
    const metersToFeet = (inputVal * 3.28084).toFixed(3)
    const feetToMeter = (inputVal / 3.28084).toFixed(3)
 
    const literToGallon = (inputVal * 0.264).toFixed(3)
    const gallonToLitter = (inputVal / 0.264).toFixed(3)
 
    const kilogramToPound = (inputVal * 2.204).toFixed(3)
    const poundToKilogram = (inputVal / 2.204).toFixed(3)
 
    const lengthEl = document.getElementById("length")
    const volumeEl = document.getElementById("volume").textContent = `${inputVal} liters = ${literToGallon} gallons | ${inputVal} gallons = ${gallonToLitter} liters`
    const massEl= document.getElementById("mass").textContent = `${inputVal} kilograms = ${kilogramToPound} pounds | ${inputVal} pounds = ${poundToKilogram} kilograms`

    if (lengthEl) {
        lengthEl.textContent = `${inputVal} meters = ${metersToFeet} feet | ${inputVal} feet = ${feetToMeter} meters`
    }
     if (volumeEl) {
        volumeEl.textContent = `${inputVal} liters = ${literToGallon} gallons | ${inputVal} gallons = ${gallonToLitter} liters`
    }
     if (massEl) {
        massEl.textContent = `${inputVal} kilograms = ${kilogramToPound} pounds | ${inputVal} pounds = ${poundToKilogram} kilograms`
    }
 
 
 })


