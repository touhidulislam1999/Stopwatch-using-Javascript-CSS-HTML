let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime=document.getElementById('displayTime');
let timer=null;

function stopwatch(){
    miliseconds++;
    if(miliseconds==100){
        miliseconds=0;
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }
    let h=hours<10?'0'+hours:hours;
    let m=minutes<10?'0'+minutes:minutes;
    let s=seconds<10?'0'+seconds:seconds;
    let ms=miliseconds<10?'0'+miliseconds:miliseconds;

    displayTime.innerHTML=`${h}:${m}:${s}:${ms}`;
}
function watchStart(){
    if(timer!==null)
        clearInterval(timer);
    timer=setInterval(stopwatch,10);
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML='00:00:00:00';

    let lapList=document.getElementById('lapList');
    lapList.innerHTML='';
}
function recordLap(){
    let h=hours<10?'0'+hours:hours;
    let m=minutes<10?'0'+minutes:minutes;
    let s=seconds<10?'0'+seconds:seconds;
    let ms=miliseconds<10?'0'+miliseconds:miliseconds;

    let lapTime=`${h}:${m}:${s}:${ms}`;
    let lapItem=document.createElement('li');
    lapItem.textContent=lapTime;
    //lapList.appendChild(lapItem);

    let lapList=document.getElementById('lapList');
    lapList.insertBefore(lapItem,lapList.firstChild);
} 