const param1 = 12;
const param2 =12;
const param3="12";
const param7 = 13;

console.log("Same Type:", param1 == param2);
console.log("Different Type:", param1== param3);
console.log("Different Value:", param1 == param7);

// İs equal with type 

const param4=15;
const param5=15;
const param6="15";
const param8=16;
console.log("Same Type:", param4 == param5);
console.log("Different Type:", param4== param6);
console.log("Different Value:", param4 == param8);

//not equal with
const param9=12;
const param10=12;
const param11="12";
const param12=13;
console.log("Same Type:", param9 == param10);
console.log("Different Type:", param9== param11);
console.log("Different Value:", param10 == param7);


//not equal with type
const param13=15;
const param14=15;
const param15="15";
const param16=16;
console.log("Same Type:", param13 == param14);
console.log("Different Type:", param13== param15);
console.log("Different Value:", param13 == param16);

//Logical Operators
const param17=15;
const param18=16;
const param19=17;

console.log(param17<param18);
console.log(param18>param17);
console.log(param17<=param18);
console.log(param18>=param17);

const bool1= !(param17<param18) && !(param18 > param17)
const bool2= !(param17<param18) || (param18 > param17)
const bool3= !(param17<param18);

console.log("LOGICAL OPERATOR AND:", bool1);
console.log("LOGICAL OPERATOR OR:", bool1);
console.log("NOT OPERATOR:",bool13);

//Tenary IF
 const age = 21;

 let votable=(age < 18)
      ?false
     :age > 20 
        ? "Aduit" 
        :true;
console.log("Oy Kullanabilir Mi:",votable)

