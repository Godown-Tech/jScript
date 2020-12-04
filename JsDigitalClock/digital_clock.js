// A setInterval() method to evaluate the expressions below at specified intervals (in milliseconds).
// The setInterval() method will continue calling the function until clearInterval(), is called, or the window is closed.
setInterval(()=>{
    var date = new Date(); //Date Object
    var hours = date.getHours(); //To get the hour (0-23)
    var minutes = date.getMinutes(); //To get the minute (0-59)
    var seconds = date.getSeconds(); //To get the Second (0-59)
    var day_night ="AM" //To add "AM" to the time where the the variable is called
    
    // Conditional Statement to override 24 Hours
    if(hours > 12){ //This block o f codes states what happens when it's past 12pm or 12am
        day_night = "PM"
        hours = hours - 12; //E.g. 13pm = 1pm
    }
    if(hours == 0){
        hours = 12;
    }
    if(hours < 10){   //This block o f codes makes every hour below 10pm or 10am to be 2-digit by appending "0" before the hour
        hours = "0" + hours; //To add zero to the hours making it 2-digit numbers
    }
    if(minutes < 10){ //This block o f codes makes 1-digit minute to be 2-digit by appending "0" before the minute
        minutes = "0" + minutes; //To add zero to the minute making it 2-digit numbers
    }
    if(seconds < 10){ //This block o f codes makes 1-digit second to be 2-digit by appending "0" before the second
        seconds = "0" + seconds; //To add zero to the second making it 2-digit numbers
    }
    // To display the current Time on the Browser
    // NB: "time" is the id applied to the html div where the time is to be displayed
    //  .textContent defines the text content of the container with the id "time"
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night; //This displays HH:MM:SS + AM or PM depending on the section of the time
});
// Codes to append current date showing only Day and Month to the current time whose codes were written above
var now = new Date(); //declaring a variable named "now" which is equal to the new date object
var days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']; //An Array named "days" containing 7-elements i.e. the names of the days of the week
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']; //An Array named "months" containing 12-elements i.e. the names the 12 Months in a year
//.getDa() get the weekday as a number (0-6
var day = days[ now.getDay() ]; //Declaring a variable named "day" to get the current day from the "now" object and display the name of the day (instead of number) from the "days" Array 
//.getMonth get the month as a number (0-11)
// NB: The Javascript concept applied here is termed "Array Accessing"
var month = months[ now.getMonth() ]; //Declaring a variable named "Month" to get the current month from the "now" object and display the name of the month (instead of number) from the "months" Array
//.getDate() get the day as a number (1-31) 
document.getElementById("date").innerHTML = day + " " + now.getDate() + "," + " " + month; //This line locates the html element with the id "date" and display the current day and month e.g. Thur 3, Dec