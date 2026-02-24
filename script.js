let timer=document.querySelector('#timer');

let x=0;
let intervalId=null;

//buttons
let startButton=document.querySelector('#startButton');
let stopButton=document.querySelector('#stopButton');
let resetButton=document.querySelector('#resetButton');

//Start Button
function start(){
    if (intervalId !== null) return;
    intervalId=setInterval(()=>{
        timer.innerHTML=x++;
    },1000)
}
startButton.addEventListener('click',start);


//Stop Button
function stop(){
    clearInterval(intervalId);
    intervalId=null;
}
stopButton.addEventListener('click',stop);

//Reset Button
function reset(){
    clearInterval(intervalId);
    intervalId = null;
    x = 0;
    timer.innerHTML = x;
}
resetButton.addEventListener('click',reset);