// A button for displaying a set of countries' data on mouse clcik
function countries () {
    var x = document.getElementById("showtable").style.display="block";
  }

// Table1 Header
var header1 = {col1:"S/N", col2:"COUNTRY", col3:"CAPITAL", col4:"CURRENCY", col5:"PRESIDENT"}
document.getElementById("sn").innerHTML=header1.col1
document.getElementById("cn").innerHTML=header1.col2
document.getElementById("cap").innerHTML=header1.col3
document.getElementById("cur").innerHTML=header1.col4
document.getElementById("pre").innerHTML=header1.col5
// First Row
var row1 = {SN:"1", COUNTRY:"Nigeria", CAPITAL:"Abuja", CURRENCY:"Naira", PRESIDENT:"Mohammadu Buhari"};
document.getElementById("serial1").innerHTML=row1.SN
document.getElementById("co1").innerHTML=row1.COUNTRY
document.getElementById("ca1").innerHTML=row1.CAPITAL
document.getElementById("cu1").innerHTML=row1.CURRENCY
document.getElementById("pr1").innerHTML=row1.PRESIDENT

// Second Row
var row2 = {SN:"2", COUNTRY:"Egypt", CAPITAL:"Cairo", CURRENCY:"Pound", PRESIDENT:"Mohamed Morsi"};
document.getElementById("serial2").innerHTML=row2.SN
document.getElementById("co2").innerHTML=row2.COUNTRY
document.getElementById("ca2").innerHTML=row2.CAPITAL
document.getElementById("cu2").innerHTML=row2.CURRENCY
document.getElementById("pr2").innerHTML=row2.PRESIDENT

// Third Row
var row3 = {SN:"3", COUNTRY:"China", CAPITAL:"Beijing", CURRENCY:"Renminbi-yan", PRESIDENT:"Xi Jinping"};
document.getElementById("serial3").innerHTML=row3.SN
document.getElementById("co3").innerHTML=row3.COUNTRY
document.getElementById("ca3").innerHTML=row3.CAPITAL
document.getElementById("cu3").innerHTML=row3.CURRENCY
document.getElementById("pr3").innerHTML=row3.PRESIDENT

// Fourth Row
var row4 = {SN:"4", COUNTRY:"Germany", CAPITAL:"Berlin", CURRENCY:"Euro", PRESIDENT:"Joachim Gauck"};
document.getElementById("serial4").innerHTML=row4.SN
document.getElementById("co4").innerHTML=row4.COUNTRY
document.getElementById("ca4").innerHTML=row4.CAPITAL
document.getElementById("cu4").innerHTML=row4.CURRENCY
document.getElementById("pr4").innerHTML=row4.PRESIDENT

// Fifth Row
var row5 = {SN:"5", COUNTRY:"France", CAPITAL:"Paris", CURRENCY:"Euro", PRESIDENT:"Francois Hollande"};
document.getElementById("serial5").innerHTML=row5.SN
document.getElementById("co5").innerHTML=row5.COUNTRY
document.getElementById("ca5").innerHTML=row5.CAPITAL
document.getElementById("cu5").innerHTML=row5.CURRENCY
document.getElementById("pr5").innerHTML=row5.PRESIDENT

// Sixth Row
var row6 = {SN:"6", COUNTRY:"Greece", CAPITAL:"Athens", CURRENCY:"Euro", PRESIDENT:"Karolos Papoulias"};
document.getElementById("serial6").innerHTML=row6.SN
document.getElementById("co6").innerHTML=row6.COUNTRY
document.getElementById("ca6").innerHTML=row6.CAPITAL
document.getElementById("cu6").innerHTML=row6.CURRENCY
document.getElementById("pr6").innerHTML=row6.PRESIDENT

// Seventh Row
var row7 = {SN:"7", COUNTRY:"India", CAPITAL:"New Delhi", CURRENCY:"Rupee", PRESIDENT:"Pranab Mukherjee"};
document.getElementById("serial7").innerHTML=row7.SN
document.getElementById("co7").innerHTML=row7.COUNTRY
document.getElementById("ca7").innerHTML=row7.CAPITAL
document.getElementById("cu7").innerHTML=row7.CURRENCY
document.getElementById("pr7").innerHTML=row7.PRESIDENT

// Eighth Row
var row8 = {SN:"8", COUNTRY:"Iran", CAPITAL:"Techran", CURRENCY:"Iranian Rial", PRESIDENT:"Mahmoud Ahmadinejad"};
document.getElementById("serial8").innerHTML=row8.SN
document.getElementById("co8").innerHTML=row8.COUNTRY
document.getElementById("ca8").innerHTML=row8.CAPITAL
document.getElementById("cu8").innerHTML=row8.CURRENCY
document.getElementById("pr8").innerHTML=row8.PRESIDENT

// Nineth Row
var row9 = {SN:"9", COUNTRY:"Japan", CAPITAL:"Tokyo", CURRENCY:"Yen", PRESIDENT:"Yoshihiko"};
document.getElementById("serial9").innerHTML=row9.SN
document.getElementById("co9").innerHTML=row9.COUNTRY
document.getElementById("ca9").innerHTML=row9.CAPITAL
document.getElementById("cu9").innerHTML=row9.CURRENCY
document.getElementById("pr9").innerHTML=row9.PRESIDENT

// Tenth Row
var row10 = {SN:"10", COUNTRY:"Italy", CAPITAL:"Rome", CURRENCY:"Euro", PRESIDENT:"Giorgio Napolitano"};
document.getElementById("serial10").innerHTML=row10.SN
document.getElementById("co10").innerHTML=row10.COUNTRY
document.getElementById("ca10").innerHTML=row10.CAPITAL
document.getElementById("cu10").innerHTML=row10.CURRENCY
document.getElementById("pr10").innerHTML=row10.PRESIDENT


// A button for displaying a set of Cars' data on mouse clcik
function cars () {
    var y = document.getElementById("showcars").style.display = "block";
}

// Table1 Header
var header2 = {cola:"S/N", colb:"CAR NAME", colc:"IMAGE", cold:"CAR MODEL", cole:"WEIGHT"}
document.getElementById("sn1").innerHTML=header2.cola
document.getElementById("cn1").innerHTML=header2.colb
document.getElementById("cap1").innerHTML=header2.colc
document.getElementById("cur1").innerHTML=header2.cold
document.getElementById("pre1").innerHTML=header2.cole

// First Row
var rowa = {SN:"1", NAME:"Van", MODEL:"2011-dodge-grand-caravan", WEIGHT:"890kg"};
document.getElementById("seriala").innerHTML=rowa.SN;
document.getElementById("naa").innerHTML=rowa.NAME;
document.getElementById("ima").src="./cars/2011-dodge-grand-caravan-Van.jpg";
document.getElementById("moa").innerHTML=rowa.MODEL;
document.getElementById("wea").innerHTML=rowa.WEIGHT;

// Second Row
var rowb = {SN:"2", NAME:"Truck", MODEL:"2015-ford-f-150 Pick-up", WEIGHT:"590kg"};
document.getElementById("serialb").innerHTML=rowb.SN;
document.getElementById("nab").innerHTML=rowb.NAME;
document.getElementById("imb").src="./cars/2015-ford-f-150 Pick-Up Truck.jpg";
document.getElementById("mob").innerHTML=rowb.MODEL;
document.getElementById("web").innerHTML=rowb.WEIGHT;

// Third Row
var rowc = {SN:"3", NAME:"BMW", MODEL:"2021 BMW", WEIGHT:"950kg"};
document.getElementById("serialc").innerHTML=rowc.SN;
document.getElementById("nac").innerHTML=rowc.NAME;
document.getElementById("imc").src="./cars/20201 BMW 430.png";
document.getElementById("moc").innerHTML=rowc.MODEL;
document.getElementById("wec").innerHTML=rowc.WEIGHT;

// Fourth Row
var rowd = {SN:"4", NAME:"Audi", MODEL:"2021 Audi RS 5", WEIGHT:"960kg"};
document.getElementById("seriald").innerHTML=rowd.SN;
document.getElementById("nad").innerHTML=rowd.NAME;
document.getElementById("imd").src="./cars/2021 Audi RS 5.webp";
document.getElementById("mod").innerHTML=rowd.MODEL;
document.getElementById("wed").innerHTML=rowd.WEIGHT;

// Fifth Row
var rowe = {SN:"5", NAME:"Trailblazer", MODEL:"2021 Chevrolet Trailblazer", WEIGHT:"660kg"};
document.getElementById("seriale").innerHTML=rowe.SN;
document.getElementById("nae").innerHTML=rowe.NAME;
document.getElementById("ime").src="./cars/2021 Chevrolet Trailblazer.webp";
document.getElementById("moe").innerHTML=rowe.MODEL;
document.getElementById("wee").innerHTML=rowe.WEIGHT;

// Sixth Row
var rowf = {SN:"6", NAME:"Trailblazer", MODEL:"2020 Honda", WEIGHT:"890kg"};
document.getElementById("serialf").innerHTML=rowf.SN;
document.getElementById("naf").innerHTML=rowf.NAME;
document.getElementById("imf").src="./cars/2021 Honda Odyssey.jpg";
document.getElementById("mof").innerHTML=rowf.MODEL;
document.getElementById("wef").innerHTML=rowf.WEIGHT;

// Seventh Row
var rowg = {SN:"7", NAME:"Nissan", MODEL:"2021 Nissan Rogue", WEIGHT:"970kg"};
document.getElementById("serialg").innerHTML=rowg.SN;
document.getElementById("nag").innerHTML=rowg.NAME;
document.getElementById("img").src="./cars/2021 Nissan Rogue.jpg";
document.getElementById("mog").innerHTML=rowg.MODEL;
document.getElementById("weg").innerHTML=rowg.WEIGHT;

// Eighth Row
var rowh = {SN:"8", NAME:"Astron", MODEL:"Astron Martin 2020", WEIGHT:"895kg"};
document.getElementById("serialh").innerHTML=rowh.SN;
document.getElementById("nah").innerHTML=rowh.NAME;
document.getElementById("imh").src="./cars/Aston Martin 2020.jpg";
document.getElementById("moh").innerHTML=rowh.MODEL;
document.getElementById("weh").innerHTML=rowh.WEIGHT;

// Nineth Row
var rowi = {SN:"9", NAME:"Diablo SV", MODEL:"Diablo SV 2020", WEIGHT:"886kg"};
document.getElementById("seriali").innerHTML=rowi.SN;
document.getElementById("nai").innerHTML=rowi.NAME;
document.getElementById("imi").src="./cars/Diablo SV 2020.jpg";
document.getElementById("moi").innerHTML=rowi.MODEL;
document.getElementById("wei").innerHTML=rowi.WEIGHT;

// Tenth Row
var rowj = {SN:"10", NAME:"Ferruccio", MODEL:"Ferruccio Lambrorghini 2020", WEIGHT:"900kg"};
document.getElementById("serialj").innerHTML=rowj.SN;
document.getElementById("naj").innerHTML=rowj.NAME;
document.getElementById("imj").src="./cars/Ferruccio Lambrorghini 2020.jpg";
document.getElementById("moj").innerHTML=rowj.MODEL;
document.getElementById("wej").innerHTML=rowj.WEIGHT;

// String Method Implementation //
// String Length
// The length of the longest word in the dictionary
var longest = "pneumonoultramicroscopicsilicovolcanoconiosis";
var sln = longest.length;
console.log(sln)

//  lastIndexOf()
var str = "Javascript adds 'life' to web elements!";
var pos = str.lastIndexOf("life");
console.log(pos)

// when the string is not found
var str = "I am Mr. Bright"
var bright = str.indexOf("smart");
console.log(bright)

// second parameter as the starting position for the search:
var str = "I am Mr. Bright"
var bright = str.indexOf("Mr." ,3);
console.log(bright)

// search ()
var str = "I am Mr. Bright"
var bright = str.search("Mr.");
console.log(bright)

// Extracting String Parts
// The slice() Method
var str = "I am Mr. Bright"
var res = str.slice(4, 7);
console.log(res)

// Negative Parameters
var str = "I am Mr. Bright"
var res = str.slice(-10, -7);
console.log(res)

// One parameter
var str = "I am Mr. Bright"
var res = str.slice(5);
console.log(res)

// One parameter (negative)
var str = "I am Mr. Bright"
var res = str.slice(-7);
console.log(res)

/*The substring() Method
substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.*/
var str = "I am Mr. Bright"
var res = str.substring(4, 7);
console.log(res)

/*The substr() Method
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.*/

var str = "Mr. Bright continue learning"
var res = str.substr(4, 7);
console.log(res)

// If you omit the second parameter, substr() will slice out the rest of the string.
var str = "Mr. Bright continue learning"
var res = str.substr(4);
console.log(res)

// If the first parameter is negative, the position counts from the end of the string.
var str = "Mr. Bright continue learning"
var res = str.substr(-8);
console.log(res)

/*Replacing String Content
// The replace() method replaces a specified value with another value in a string:
By default, the replace() function replaces only the first match:*/
var str = "Mr. Bright continue learning"
var re = str.replace("Bright", "Smart");
console.log(re)

// By default, the replace() function is case sensitive.
var str = "Mr. Bright continue learning"
var re = str.replace("bright", "Smart");
console.log(re)

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
var str = "Mr. Bright continue learning"
var re = str.replace(/bright/i, "Smart");
console.log(re)

// To replace all matches, use a regular expression with a /g flag (global match):
var str = "Mr. Bright remain bright and continue learning"
var re = str.replace(/bright/gi, "Smart");
console.log(re)

/*Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():*/
var txt = "Mr. Bright you can do better!"
var x = txt.toLocaleUpperCase();
var y = x.toLowerCase();
console.log(x);
console.log(y)

/*The concat() Method
concat() joins two or more strings:*/
var x = "Java"
var y = "Script!"
var z = x.concat(y);
console.log(z)

// The concat() method can be used instead of the plus operator. These two lines do the same:
var x = "Java"
var y = "Script!"
var z = x + y;
console.log(z)

/*String.trim()
String.trim() removes whitespace from both sides of a string.*/
var be = "   Advancing Coder    "
alert(be.trim())

/*Extracting String Characters
There are 2 safe methods for extracting string characters:

charAt(position)
charCodeAt(position)
The charAt() Method
The charAt() method returns the character at a specified index (position) in a string:*/
var str = "Advancing Coder"
var c = str.charAt(0);
console.log(c)

/*The charCodeAt() Method
The charCodeAt() method returns the unicode of the character at a specified index in a string:*/
var str = "Advancing Coder"
console.log(str.charCodeAt(0))

// Accessing a String as an Array is Unsafe
var str = "Advancing Coder"
 str[0];
console.log(str[0])
/*Converting a String to an Array
A string can be converted to an array with the split() method:*/
var str = "Bright,Smart,Star";
var arr = str.split(",");
console.log(arr[0])

/*If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:*/
var str = "Bright,Smart,Star";
var arr = str.split("");
console.log(arr[0])

var str = "Bright,Smart,Star";
var arr = str.split();
console.log(arr[0])

// Escape sequences/Character escaping
// backslash (\) escape character
// This turns special characters into string characters
// Single Quotes
var x = "The Bible says \'The Spirit is willing but the body is weak!\' Do you believe?";
console.log(x)

// Double Quotes
var x = "The Bible says \"The Spirit is willing but the body is weak!\" Do you believe?";
console.log(x)

// The sequence \\  inserts a backslash in a string:
// Date using backslash
var x = "18\\11\\2020";
console.log(x)

// other escape sequences that are valid in JavaScript
// To enter a new Line
var x = "I love the Bible";
var y = "You love the Bible";
var z = "We love the Bible";
console.log(x,'\n', + y,'\n', + z,'\n')

