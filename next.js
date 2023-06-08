
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

let storeMin = null;
let storeMax = null;

min.addEventListener('input' , function (event) {
    storeMin = Number(event.target.value);
    console.log(storeMin);
});

max.addEventListener('input' , function (event) {
    storeMax = Number(event.target.value);
    console.log(storeMax);
});

btn.addEventListener('click', function() {   
    let range = storeMax - storeMin;
    let x = Math.floor((Math.random() * range) + storeMin);
    result.innerHTML = x;
    console.log(x);
});