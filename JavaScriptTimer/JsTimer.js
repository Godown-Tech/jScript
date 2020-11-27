var hours = 00;
var minutes = 00;
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var appendHours = document.getElementById("hours");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
 var interval; //to store timer values

//  Function to start when the start button is clicked
// For tens
function startTimer(){
    tens++;
    if(tens<9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }

    // Convert Tens to Seconds
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML = seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds<9){
        appendSeconds.innerHTML = "0" + seconds;
    }
    if(seconds>9){
        appendSeconds.innerHTML = seconds;
    }

    // Convert Seconds to Minutes
    if(seconds>59){
        minutes++;
        appendMinutes.innerHTML = minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if(minutes<9){
        appendMinutes.innerHTML = "0" + minutes;
    }
    if(minutes>9){
        appendMinutes.innerHTML = minutes;
    }

    // Convert Minutes to Hours
    if(minutes>59){
        hours++;
        appendHours.innerHTML = hours;
        minutes = 0;
        appendMinutes.innerHTML = "0" + 0;
    }
    if(hours<9){
        appendHours.innerHTML = "0" + hours;
    }
    if(hours>9){
        appendHours.innerHTML = hours;
    }
}

// Buttons behavour onclick
buttonStart.onclick = function(){
    interval = setInterval(startTimer);
}
buttonStop.onclick = function(){
    clearInterval(interval);
}
buttonReset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes= "00"
    hours = "00"
    appendHours.innerHTML = hours;
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}

