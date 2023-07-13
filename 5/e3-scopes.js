{
    let a = 2;
    //a can be used here
}
//a cannot be used here

{
    var b = 2;
    //be can be used here 
}
//be can be used here 

{
    const c = 3;
    //c cant be used here
}
//c cant be used here


//Locale Scope
//code here can not use firstName
function testFn1(){
    let FirstName = "StartUp";
}

//code here can not use firstName 

//function scope
function testFn2(){
    let firstName = "StartUp";  // Function scoped
    let secondName = "Academy"; //Function scoped
    //code here can use firstName
    //code here can use secondName
}
//code here can use firstName
//code here can use secondName


//GLOBAL SCOPE

let firstName = "StartUp"; //Global Scope
//code here can use firstName
function testFn3(){
//code here can use firstName
}