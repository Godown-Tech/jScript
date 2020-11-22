// JavaScript has only one type of number. Numbers can be written with or without decimals.
// Extra large or extra small numbers can be written with scientific (exponent) notation:
var x = 246e2;
console.log(x) 
var y = 233e-3;
console.log(y) 

/*Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.*/
var x = 999999999999999;
console.log(x) 
var y = 9999999999999999;
console.log(y)

// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
var x = 0.2 + 0.1;
console.log(x) 

// Adding Numbers and Strings
var x = 10;
var y = 20;
var z = x + y;
console.log(z)

// If you add two strings, the result will be a string concatenation:
var x = "10";
var y = "20";
var z = x + y;
var c = typeof(z)
console.log(c)

var x = 10;
var y = 20;
var z = "30";
var result = x + y + z;
console.log(result)

/*JavaScript will try to convert strings to numbers in all numeric operations:

This will work:*/
// Division
var x = "100";
var y = "10";
var z = x / y; 
console.log(z)

// Multiplication
var x = "100";
var y = "10";
var z = x * y;
console.log(z)

// Subtraction
var x = "100";
var y = "10";
var z = x - y;
console.log(z)

// Addition does not work here
var x = "100";
var y = "10";
var z = x + y;
console.log(z)

/*NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):*/
var x = 100 / "Smart";
console.log(x) 

// However, if the string contains a numeric value , the result will be a number:
var x = 2 / "1";
console.log(x) 

// You can use the global JavaScript function isNaN() to find out if a value is a number:
var x = 100 / "Smart";
console.log(isNaN(x)); 

var x = 100 / "10";
console.log(isNaN(x)); 

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN: Or the result might be a concatenation:
var x = NaN;
var y = 2;
var z = x + y;
console.log(z)

var x = NaN;
var y = "5";
var z = x + y;
console.log(z)

// Division by 0 (zero) also generates Infinity:
var x = 2;
var y = 0;
var z = x / y;
console.log(z)

/*Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.*/
var x = 0xFC;
console.log(x)

// Number base conversion
/*By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.*/
var n = 150;
console.log(n.toString(10), "\n", n.toString(16), "\n", n.toString(8), "\n", n.toString(2))

// Numbers Can be Objects
var x = 123;
var y = new Number(123);
console.log(typeof(x), "\n", typeof(y))

//Objects cannot be compared:
var x = new Number(500);             
var y = new Number(500);
console.log(x==y)



