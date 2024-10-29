// RANDOM NUMBER GENERATOR
 
const mybutton = document.getElementById("mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3= document.getElementById("label3");

const min = 1;
const max = 6;
let randomnum1;
let randomnum2;
let randomnum3;



mybutton.onclick = function(){
    randomnum = Math.floor(Math.random () *max)+min;
    label1.textContent = randomnum;
    label2.textContent = randomnum;
    label3.textContent = randomnum;
}

