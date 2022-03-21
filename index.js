let inputEle = document.getElementById("input-ele");

let lengthEle1 = document.getElementById("length-ele-1");
let lengthEle2 = document.getElementById("length-ele-2");
let lengthEle3 = document.getElementById("length-ele-3");
let lengthEle4 = document.getElementById("length-ele-4");

let volumeEle1 = document.getElementById("volume-ele-1");
let volumeEle2 = document.getElementById("volume-ele-2");
let volumeEle3 = document.getElementById("volume-ele-3");
let volumeEle4 = document.getElementById("volume-ele-4");

let massEle1 = document.getElementById("mass-ele-1");
let massEle2 = document.getElementById("mass-ele-2");
let massEle3 = document.getElementById("mass-ele-3");
let massEle4 = document.getElementById("mass-ele-4");

inputEle.addEventListener("input", showConversion);


function showConversion() {
    lengthEle1.innerText = inputEle.value;
    lengthEle2.innerText = (inputEle.value * 3.28084).toFixed(6);
    lengthEle3.innerText = inputEle.value;
    lengthEle4.innerText = (inputEle.value * 0.3048).toFixed(6);

    volumeEle1.innerText = inputEle.value;
    volumeEle2.innerText = (inputEle.value * 0.264172).toFixed(6);
    volumeEle3.innerText = inputEle.value;
    volumeEle4.innerText = (inputEle.value * 3.78541).toFixed(6);

    massEle1.innerText = inputEle.value;
    massEle2.innerText = (inputEle.value * 2.20462).toFixed(6);
    massEle3.innerText = inputEle.value;
    massEle4.innerText = (inputEle.value * 0.453592).toFixed(6);
}