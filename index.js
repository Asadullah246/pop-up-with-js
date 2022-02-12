let button = document.querySelector('.butt');
let popUp=document.querySelector('.popUpBody');
let close=document.querySelector('.hide-button');
button.addEventListener('click',function(){
    popUp.style.display='block';
});
close.addEventListener('click',function(){
    popUp.style.display='none';
});