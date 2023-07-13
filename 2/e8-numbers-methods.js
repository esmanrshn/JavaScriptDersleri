let num1=120;

let str1=num1.toString();

console.log("Volue:", num1);
consolo.log("string value:", str1);

let num2=1000000;

console.log("Value:", num2);
let num3 = num2.toExponential(2);
console.log("Exponential of fragment 2:",num3)

let num4 = num2.toExponential(3);
console.log("Exponential of fragment 3:",num4)

let num5= num2.toExponential(4);
console.log("Exponential of fragment 4:",num5)

let num6 = num2.toExponential(6);
console.log("Exponential of fragment 6:",num6)

let num7 = 96.877456354;

console.log("Value:", num7);

let num8=num7.toFixed(3);

console.log("Fixed 3 value:", num9)

//ToPrecision

let num10 = 960000.5;

console.log("Value:", num10);

let num11 =num10.toPrecision();
console.log("Precision auto value:", num11)

let num12 =num10.toPrecision(4);
console.log("Precision auto value:", num12)

/*Valueof */

let num13= new Number(960000.5);
console.log("Value:", num13)

let num14 = num13.valueOf();
console.log("Value of number object:", num14);

//parseInt

let num15="654.6284924";
console.log("Value:", num15)

let num16=parseInt(num15);
console.log("Parsed integer value:",num16)

//parseFloat

let num17  = "-15s";

let num18 = parseFloat("-15");
