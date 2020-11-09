// A window Alert displaying "Are you ready to learn Javascript?"//
    window.alert("Are you ready to learn Javascript?")
// Display "Welcome to Javascript" on click.//
function myFunction () {
    document.getElementById("welcome").innerHTML = "Welcome to Javascript!"
}
// Addition Operator
var x = 200000;
var y = 14058;
var z = x + y;
console.log(z)

// Multiplication Opeartor 
var x = 205;
var y = 500;
var z = x * y;
console.log(z)

// Subtration Opeartor 
var x = 200;
var y = 50;
var z = x - y;
console.log(z)

// Division Opeartor 
var x = 200;
var y = 50;
var z = x / y;
console.log(z)

// Modulus Opeartor 
var x = 5;
var y = 2;
var z = x % y;
console.log(z)

// Increment Opeartor 
var x = 5;
var y = 2;
var z = x % y;
console.log(++z)

// Decrement Opeartor 
var x = 5;
var y = 2;
var z = x % y;
console.log(--z)

/* Assignment Operators / assigning values to JavaScript variables 
1. "Equal to '='"*/
var x = 2
var y = 4 + 2
console.log(x = y + 1)

var x = 2
var y = 2
var z = x = y
console.log(z)

// 2. "+ Equal to '+='"
var x = 2
x += 10
console.log(x)

var y = 0
y += 20 
console.log(y)

// 3. "- Equal to '-='"
var x = 12
x -= 10
console.log(x)

var y = 20
y -= 10 
console.log(y)

// 4. "* Equal to '*='"
var x = 1
x *= 10
console.log(x)

var y = 2
y *= 10 
console.log(y)

// 5. "/Equal to '/='"
var x = 40
x /= 10
console.log(x)

var y = 20
y /= 10 
console.log(y)

// 6. "%Equal to '%='"
var x = 40
x %= 3
console.log(x)

var y = 20
y %= 10 
console.log(y)

// JavaScript String Concatenation
txt1 = "Bright";
txt2 = "Sunny";
txt3 = "welldone";
txt4 = txt1 + " " + txt2 + " " + txt3;
console.log(txt4 = txt1 + " " + txt2 + " " + txt3)

txt1 = "Javascript is becoming interesting... ";
txt1 += "What a popular Language that real programmers cannot do without!";
console.log(txt1)

// Adding Strings and Numbers
x = 5 + 5;
y = x + 5;
z = "The answer is" + " " + 5;
console.log(z)

// JavaScript comparison operators
// 1. Greater than ">"
var a = 20 > 10;
console.log(a) 

// 1. Less than "<"
var b = 20 < 10;
console.log(b) 

// 1. Equal to "="
var c = 10 == 10; 
console.log(c) 

// equal value and equal type
var c = 10 === 10; 
console.log(c)

var c = "10" === 10; 
console.log(c)  

// not equal
var c = 10 != 10; 
console.log(c)

var c = 10 != 12; 
console.log(c)  

// not equal value or not equal type
var c = 10 !== 10; 
console.log(c)

var c = "10" !== 12; 
console.log(c)  

// greater than or equal to
var c = 10 >= 10; 
console.log(c)

var c = 10 >= 12; 
console.log(c) 

// Less than or equal to
var c = 10 <= 10; 
console.log(c)

var c = 10 <= 12; 
console.log(c) 

// ternary operator
var age = 20;
var canLearnJavascript;
if (age > 18) {
    canLearnJavascript = 'yes';
} else {
    canLearnJavascript = 'no';
}
console.log(canLearnJavascript)

// Javascript Functions 
// Calculation of Area of a triangle
function Area (a, b){
var Area = a * b;
txt = "is the area of a right angle triangle with a = 2 and b =4"
console.log(Area + " " + txt)
}
Area(2, 4)

// Conversion of Workdone to Newton
function Workdone (f, d){
    var Workdone = f * d;
    txt = "N"
    console.log(Workdone + txt)
    }
    Workdone(20, 5)

    // Calculation of the circumference of a circle
function circumference (r){
    const PI = 22/7
    var circumference = 2 * PI * r;
    console.log(circumference)
    }
    circumference(8)

       // Conversion of degree to radian
function radian (deg){
    const PI = 3.142
    var radian = ((deg * PI) / 180);
    txt = "rad";
    console.log(radian + txt)
    }
    radian(50)
    
