let combineBtn=document.querySelector('#combine-btn');
let colorDisplay=document.querySelector('#color-display');
let color1=document.querySelector('#color1');
let color2=document.querySelector('#color2');




combineBtn.addEventListener('click',function(){
    colorDisplay.style.background=`linear-gradient(${color1.value},${color2.value})`;
})