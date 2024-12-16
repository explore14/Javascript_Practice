let counter=0;
let counterValue=document.getElementById("counter");
let increment=document.getElementById("add");
let decrement=document.getElementById("decrement");
let setZero=document.getElementById("zero");

increment.addEventListener('click',()=>{
    counter++;
    counterValue.innerText=counter;
})
decrement.addEventListener('click',()=>{
    counter--;
    counterValue.innerText=counter;
})
setZero.addEventListener('click',()=>{
    counter=0;
    counterValue.innerText=counter;
})
