let combineBtn=document.querySelector('#combine-btn');
let colorDisplay=document.querySelector('#color-display');
let color1=document.querySelector('#color1');
let color2=document.querySelector('#color2');
let color3=document.querySelector('#color3');
let colorCode=document.querySelector('#combined-color-code');



combineBtn.addEventListener('click',function(){
    colorDisplay.style.background=`linear-gradient(135deg,${color1.value},${color2.value},${color3.value})`;
    colorCode.innerHTML=`${color1.value} , ${color2.value} , ${color3.value} `;
})