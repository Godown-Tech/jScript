// Variable Declarations
var hours = 00; //The initial value of hours is 00
var minutes = 00; //The initial value of minutes is 00
var seconds = 00; //The initial value of seconds is 00
var tens = 00; //The initial value of tens is 00
var appendTens = document.getElementById("tens"); //A declared variable to access the html div bearing the id named "tens"
var appendSeconds = document.getElementById("seconds"); //A declared variable to access the html div bearing the id named "seconds"
var appendMinutes = document.getElementById("minutes"); //A declared variable to access the html div bearing the id named "minutes"
var appendHours = document.getElementById("hours"); //A declared variable to access the html div bearing the id named "hours"
var buttonStart = document.getElementById("button-start"); //A declared variable to access the html div bearing the id named "button-start"
var buttonStop = document.getElementById("button-stop"); //A declared variable to access the html div bearing the id named "button-stop"
var buttonReset = document.getElementById("button-reset"); //A declared variable to access the html div bearing the id named "button-reset"
var interval; //to store timer values.

//  Function to execute when any of the buttons is clicked
function startTimer(){    //A declared function. The function name is StartTimer()
    // For tens
    tens++; //This means tens increment.
    if(tens<9){  //conditional statement to maintain 2-digit values
        appendTens.innerHTML = "0" + tens; //Access the appendTens Variable and assign to its html container the value of '"0" + tens' 
    }
    if(tens>9){ //This states what happens when tens is greater than 9
        appendTens.innerHTML = tens;  //Access the appendTens Variable and assign to its html container the value of 'tens' 
    }

    // Convert Tens to Seconds
    if(tens>99){ //NB: 100 tens = 1second
        seconds++; //Seconds increment. Each time tens reads up to 99, seconds increases by 1 
        appendSeconds.innerHTML = seconds;  //Access the appendSeconds Variable and assign to its containing html element the value of 'seconds' 
        tens = 0; //Each time tens reads up to 99,it starts afresh from zero (0)
        appendTens.innerHTML = "0" + 0; //The string "0" is added to the value of tens to obtain 2-digit numbers
    }
    if(seconds<9){ //A conditional statement to maintain 2-digit values by adding "0" before the values
        appendSeconds.innerHTML = "0" + seconds; //Access the appendSeconds Variable and assign to its containing html element the value of '"0" + seconds' 
    }
    if(seconds>9){ //To make values greater than 9 remain 2-digit
        appendSeconds.innerHTML = seconds; //At this point, the variable named 'seconds' now has 2-digit value naturally, so no additional "0" needed
    }

    // Convert Seconds to Minutes
    if(seconds>59){ //NB 60sec = 1min
        minutes++; //Minutes increment everytime seconds reads up to 59
        appendMinutes.innerHTML = minutes; //Access the appendMinutes Variable and assign to its containing html element the value of 'seconds' 
        seconds = 0; //seconds returns zero(0) once it exceeds 59
        appendSeconds.innerHTML = "0" + 0; //To maintain 2-digit values, this returns the value of appendSeconds = 00 
    }
    if(minutes<9){  //what happens when the variable 'appendMinutes' is below 10
        appendMinutes.innerHTML = "0" + minutes; //This is to add "0" making the value of 'appendMinutes' 2-digit. E.g. 01min, 02min
    }
    if(minutes>9){   //This states what happens when the variable 'appendMinutes' is greater or equal to 10
        appendMinutes.innerHTML = minutes; //Output the value of the variable 'appendMinutes'
    }

    // Convert Minutes to Hours
    if(minutes>59){ //NB: 60min = 1hour
        hours++; //hour increment
        appendHours.innerHTML = hours;  //Access the appendHours Variable and assign to its containing html element the value of 'hours' 
        minutes = 0; //minutes returns zero (0) once it gets to 99
        appendMinutes.innerHTML = "0" + 0; //This is to add "0" making the value of 'appendMinutes' 2-digit. E.g. 01min, 02min
    }
    if(hours<9){   //To make hour 2-digit it is still below 10
        appendHours.innerHTML = "0" + hours;  //Adding zero (0) to the values of hours below 10
    }
    if(hours>9){ //Retaining the actual values of hours as long as it is above 10
        appendHours.innerHTML = hours;  //Access the appendHours Variable and assign to its containing html element the value of 'hours' 
    }
}

// Buttons behavour onclick
//The function below is actually an anonymous function (a function without a name).
// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
//NB: "Function expression" always ends with semi colon unlike "function declaration"
buttonStart.onclick = function(){   //A function expression. A function expression can be stored in a variable as applied here. This lines defines what happens when the buttonStart is click
//The setInterval() method is to call the function named "startTimer" at the specified intervals (in milliseconds).
    interval = setInterval(startTimer, 1);  //Accessing the declared function. NB: interval is a variable name as declared earlier in the beginning of this code
    buttonStart.innerHTML = "Start";
}
// To stop the timer when needed
buttonStop.onclick = function(){   //This line states what happens when the buttonStop is clicked
// The setInterval() method will continue calling the function until this clearInterval() is called, or the window is closed.
// The already declared variable nameed "interval" value returned by setInterval() is used as the parameter for the clearInterval() method.
    clearInterval(interval);  // The clearInterval() method is used to cancel or stop the timer
    buttonStart.innerHTML = "Resume";
}

// To reset the timer when needed
buttonReset.onclick = function(){   //This line states what happens when the buttonReset is clicked
 // The clearInterval() method is used to cancel the timer   
    clearInterval(interval);    // The clearInterval() method is used to cancel or stop the timer
    tens = 0;  //assigning new initial value to tens
    seconds = 0; //assigning new initial value to seconds
    minutes = 0; //assigning new initial value to minutes
    hours = 0; //assigning new initial value to hours
    // The "0" is added to the values of appendHours, appendMinutes, appendSeconds, appendTens to obtain 2-digit numbers i.e. 00
    appendHours.innerHTML = "0" + hours; //Access the appendHours Variable and assign to its containing html element the value of '"0" + hours' 
    appendMinutes.innerHTML = "0" + minutes; //Access the appendMinutes Variable and assign to its containing html element the value of '"0" + minutes' 
    appendSeconds.innerHTML = "0" + seconds; //Access the appendSeconds Variable and assign to its containing html element the value of '"0" + seconds' 
    appendTens.innerHTML = "0" + tens;  //Access the appendTens Variable and assign to its containing html element the value of '"0" + tens' 
}

 