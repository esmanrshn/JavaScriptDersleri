//REPLACE

let str1= "Test,StarUp Academy Test";
//console.log(Str1);

let newStr1 = str1.replace("Test","Hi");
//console.log(newStr1);

//REPLACE REGEX

let str2 = "Test,StarUp Academy, Test Successful";
//console.log(str2);

//TOUPPERCASE

let str3 = "Hello World!";
//console.log("Normal Text:",str3);

let uppercase = str3.toUpperCase();
//console.log("UpperCased Text:",uppercase);

//CONCAT
let str4 = "Hello"
//console.log("First Part:", str4);

let str5 = "World"
//console.log("First Part:", str5);
 
let concatedstr = str4.concat(" ", str5);
console.log("Concated Str with operator:", concatedStr);

let concatedStrwithOperator = str4 + " " + str5;
//console.log("Concated Str with Operator:",concatedStrwithOperator);

//TRIM
let str6 = "  Hello,    World"
//consolo.log("Str value:",str6);

let trimmed = str6.trim();
//console.log("Trimmed Str value:", trimmed);

//Pads

//padStrat
let str7 = "5";

//console.log("Normal String:", str7)

let padded1 = str7.padStart(25,"x");

//console.log("Normal String:",padded1)

let str8 = "5";

//console.log("Normal String:", str7)

let padded2 = str8.padStart(25,"x");

//console.log("Padded String;", padded2 )

