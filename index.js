/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const conversion = [3.281, 0.264, 2.204];

const convertBtn = document.getElementById("convert-btn");

const inputEl = document.getElementById("input");
const inputValue = inputEl.value;

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

convertBtn.addEventListener("click", function () {
  let ft = (inputEl.value * conversion[0]).toFixed(3);
  let mt = (inputEl.value / conversion[0]).toFixed(3);
  let l = (inputEl.value * conversion[1]).toFixed(3);
  let gal = (inputEl.value / conversion[1]).toFixed(3);
  let kg = (inputEl.value * conversion[2]).toFixed(3);
  let lb = (inputEl.value / conversion[2]).toFixed(3);
  lengthEl.innerHTML = `${inputEl.value} meters = ${ft} feet<br>${inputEl.value} feet = ${mt} meters`;
  volumeEl.innerHTML = `${inputEl.value} liters = ${l} gallons<br>${inputEl.value} gallons = ${gal} liters`;
  massEl.innerHTML = `${inputEl.value} kilos = ${kg} pounds<br>${inputEl.value} pounds = ${lb} kilos`;
});
