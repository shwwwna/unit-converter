/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// convertBtn.addEventListener("click", function () {
//   let ft = (inputEl.value * 3.281).toFixed(3);
//   let mt = (inputEl.value / 3.281).toFixed(3);
//   lengthEl.innerHTML = `${inputEl.value} meters = ${ft} feet<br>${inputEl.value} feet = ${mt} meters`;
// });

const conversion = [
  {
    unit: "meter to feet",
    factor: 3.281,
  },
  {
    unit: "liter to gallon",
    factor: 0.264,
  },
  {
    unit: "kilogram to pound",
    factor: 2.204,
  },
];

const convertBtn = document.getElementById("convert-btn");

const inputEl = document.getElementById("input");
const inputValue = inputEl.value;

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("length");
const lengthEl = document.getElementById("length");

convertBtn.addEventListener("click", function () {
  let ft = (inputEl.value * conversion[0].factor).toFixed(3);
  let mt = (inputEl.value / conversion[0].factor).toFixed(3);
  let l = (inputEl.value * conversion[1].factor).toFixed(3);
  let gal = (inputEl.value / conversion[1].factor).toFixed(3);
  let kg = (inputEl.value * conversion[1].factor).toFixed(3);
  let lb = (inputEl.value / conversion[1].factor).toFixed(3);
  lengthEl.innerHTML = `${inputEl.value} meters = ${ft} feet<br>${inputEl.value} feet = ${mt} meters`;
  lengthEl.innerHTML = `${inputEl.value} meters = ${ft} feet<br>${inputEl.value} feet = ${mt} meters`;
  lengthEl.innerHTML = `${inputEl.value} meters = ${ft} feet<br>${inputEl.value} feet = ${mt} meters`;
});
