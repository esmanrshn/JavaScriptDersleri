let bool1=true;
let bool2=false;

console.log("True:",bool1);
console.log("False",bool12);

let bool3=Boolean(undefined);
console.log("Value of bool3:", bool3);

let bool4= Boolean(null);
console.log("Value of bool4:", bool4);

let bool5=Boolean(NaN);
console.log("Value of bool5:",bool5);

let bool6=Boolean(0);
console.log("Value of bool6:",bool6);

let bool7=Boolean(-0);
console.log("Value of bool7:",bool7);

let bool8=Boolean(1);
console.log("Value of bool8:",bool8);

let bool9=Boolean(-1);
console.log("Value of bool9:",bool9);

let bool10=Boolean("");
console.log("Value of bool10:",bool10);

let bool11=Boolean("17");
console.log("Value of bool11:",bool11);

//Boolean as objects 

let bool12= new Boolean(12);
console.log("Value of bool12:", bool12);

let bool13= new Boolean(-0);
console.log("Value of bool13:", bool13);

let bool14= new Boolean("Test");
console.log("Value of bool14:", bool14);

let bool15= new Boolean("");
console.log("Value of bool15:", bool15);

let bool16= new Boolean(null);
console.log("Value of bool16:", bool16);

let bool17= new Boolean(NaN);
console.log("Value of bool17:", bool17);

let bool18= new Boolean(undefined);
console.log("Value of bool18:", bool18);

