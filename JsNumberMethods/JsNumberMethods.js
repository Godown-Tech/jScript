// The toString() Method
// toString() returns a number as a string.
var x = 123;
console.log(x.toString());
console.log((123).toString());
console.log(typeof((100 + 23).toString()));
console.log((100 + 23).toString());

// The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.
var x = 5.12345;
console.log(x.toExponential(1))
console.log(x.toExponential(5))

// The toFixed() Method
var x = 5.12345;
console.log(x.toFixed(1))
console.log(x.toFixed(5))

// The toPrecision() Method
var x = 5.12345;
console.log(x.toPrecision(1))
console.log(x.toPrecision(5))

// The valueOf() Method
var x = 5.12345;
console.log(x.valueOf())
console.log(typeof(x.valueOf()))



