"use strict";

let number = 0;
let btn = document.querySelector('.btn-danger');

function info(){
    number++;
    console.log(`'is working' ${number}`);
}

const time = setInterval( info , 1000);

btn.addEventListener('click', ()=>{
    clearInterval(time)
})

setTimeout(()=>{
    console.log("WORKING");
}, 3000);