
const display = document.querySelector('.display'),
      start = document.querySelector('.start'),
      stop = document.querySelector('.stop'),
      reset = document.querySelector('.reset'),
      wait = document.querySelector('.wait');

let sec = 0;
let min = 0;
let hrs = 0;
let t;
let i = 0;
let clickCount = 0;
let timeoutID = 0;


function add() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }

    display.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    startTimer();
}


function startTimer() {
    t = setTimeout(add, 1000);  
}
function stopTimer() {
    clearTimeout(t);
    i = 0; 
}

function resetTimer() {
    stopTimer();
    display.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0;
     
}


start.addEventListener('click', () =>{      // btn start
    if(i == 0){
        i++;
        startTimer();
    }
});

stop.addEventListener('click', resetTimer);     // btn stop  =>  reset timer


reset.addEventListener('click', () => {         // btn reset  =>  reset and start timer
    if(sec != 0 || min != 0 || hrs != 0){
    resetTimer();
    if(i == 0){
        i++;
        startTimer();
    }
}
});



wait.addEventListener('click', () => {          // btn wait => continue to count timer
    clickCount++;
    if (clickCount >= 2) {
        clickCount = 0; 
        clearTimeout(timeoutID); 
        stopTimer();
     }
     else if (clickCount == 1) {
        const callBack = function(){ 
                if (clickCount == 1) {      
                    clickCount = 0;       
                    console.log('1 - click');
                }
        };
        timeoutID = setTimeout(callBack, 300); 
     }
});


    