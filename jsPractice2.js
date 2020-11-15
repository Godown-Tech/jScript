// A button for displaying a set of countries' data on mouse clcik
function countries () {
    document.getElementById("showtable").style.display = "block";
}
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
    document.getElementById("showcars").style.display = "block";
}
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


